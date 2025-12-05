let selectedCity = null;

// Show autocomplete suggestions
async function showSuggestions() {
  const cityInput = document.getElementById("cityInput").value.trim();
  const suggestions = document.getElementById("suggestions");
  suggestions.innerHTML = "";
  selectedCity = null;

  if (!cityInput) return;

  try {
    const geoURL = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeURIComponent(cityInput)}&limit=5`;
    const geoRes = await fetch(geoURL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a39974971amsh978b2b3dd7ac04ep164326jsnb23c44f45235",
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
      }
    });
    const geoData = await geoRes.json();
    if (!geoData.data) return;

    geoData.data.forEach(city => {
      const li = document.createElement("li");
      li.textContent = `${city.city}, ${city.country}`;
      li.onclick = () => {
        document.getElementById("cityInput").value = `${city.city}, ${city.country}`;
        selectedCity = city;
        suggestions.innerHTML = "";
      };
      suggestions.appendChild(li);
    });

  } catch (err) {
    console.error("Error fetching city suggestions:", err);
  }
}

// Fetch city, weather, currency
async function getData() {
  if (!selectedCity) {
    document.getElementById("result").innerText = "Please select a city from suggestions!";
    return;
  }

  const cityInfo = selectedCity;

  try {
    // Weather by lat/lon
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&appid=163adc1e245a375c453d48dac9332473&units=metric`;
    const weatherRes = await fetch(weatherURL);
    const weatherData = await weatherRes.json();
    if (!weatherData || !weatherData.weather) {
      document.getElementById("result").innerText = "Weather data not found!";
      return;
    }

    // Currency
    const countryCurrency = {
      "HK": "HKD", "US": "USD", "CA": "CAD", "IN": "INR",
      "GB": "GBP", "AF": "AFN", "LK": "LKR"
    };
    const currencyCode = countryCurrency[cityInfo.countryCode] || "USD";
    const currencyURL = `https://v6.exchangerate-api.com/v6/7ecc738f1bdab260de2e3f1f/latest/${currencyCode}`;
    const currencyRes = await fetch(currencyURL);
    const currencyData = await currencyRes.json();
    const currencyRate = currencyData.conversion_rates["USD"] || 1;

    // Display
    document.getElementById("result").innerHTML = `
      <h3>City: ${cityInfo.city}, ${cityInfo.country}</h3>
      <p>Population: ${cityInfo.population || 'N/A'}</p>
      <p>Region: ${cityInfo.region || 'N/A'}</p>
      <p>Weather: ${weatherData.weather[0].description}, Temp: ${weatherData.main.temp}°C</p>
      <p>Currency: 1 ${currencyCode} = ${currencyRate.toFixed(2)} USD</p>
      <p>Latitude: ${cityInfo.latitude}, Longitude: ${cityInfo.longitude}</p>
    `;

  } catch (err) {
    console.error(err);
    document.getElementById("result").innerText = "Error fetching data!";
  }
}

// Reset input & results
function resetFields() {
  document.getElementById("cityInput").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("suggestions").innerHTML = "";
  selectedCity = null;
}

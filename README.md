# Travel & City Info Dashboard

A modern web application that allows users to search for cities worldwide and view **population**, **region**, **weather**, **coordinates**, and **currency conversion** details.
The app integrates data from multiple APIs and offers a clean, fast, and interactive user experience.

---

## 📸 Project Preview

(Add a screenshot after your UI is completed)

```
assets/screenshot.png
```

---

## Table of Contents

* [Overview](#-overview)
* [Features](#-features)
* [Technologies Used](#-technologies-used)
* [APIs Used](#-apis-used)
* [Project Structure](#-project-structure)
* [Setup & Installation](#-setup--installation)
* [How to Run with Live Server](#️-how-to-run-with-live-server)
* [Environment Variables (API Keys)](#-environment-variables-api-keys)
* [Usage Guide](#-usage-guide)
* [Auto-Suggestion Feature](#-auto-suggestion-feature)
* [Handling Duplicate City Names](#-handling-duplicate-city-names)
* [Contribution Workflow (Group Project)](#-contribution-workflow-group-project)
* [Branch Naming Convention](#-branch-naming-convention)
* [Commit Message Convention](#-commit-message-convention)
* [Troubleshooting](#-troubleshooting)
* [Team Members](#-team-members)
* [License](#-license)

---

##  Overview

**Travel & City Info Dashboard** is a lightweight frontend application created using **HTML**, **CSS**, and **JavaScript**.
Users can search for any city and instantly view:

* City details
* Weather information
* Population
* Latitude & Longitude
* Currency conversion rates

Built for educational, collaborative, and real-world development environments, with complete Git workflow support for group projects.

---

##  Features

###  Intelligent City Search

* Live auto-suggestions based on typed characters
* Shows city names with country codes

###  City Information

* City
* Country
* Region
* Coordinates
* Population

###  Live Weather

* Real-time weather
* Temperature in °C
* Weather condition

###  Currency Conversion

* Detects country currency
* Shows exchange rate to USD

###  Modern Frontend UI

* Light theme
* Clean search bar
* Suggestion dropdown
* Reset button

###  Error Handling

* Invalid city
* API failure
* Empty input

---

##  Technologies Used

| Technology         | Purpose           |
| ------------------ | ----------------- |
| HTML5              | Structure         |
| CSS3               | Styling           |
| JavaScript (ES6)   | Logic             |
| Fetch API          | API Fetching      |
| GeoDB Cities API   | City details      |
| OpenWeatherMap API | Weather           |
| ExchangeRate API   | Currency          |
| Git & GitHub       | Version control   |
| Live Server        | Local development |

---

##  APIs Used

### 1️ GeoDB Cities API

Used for:

* City lookup
* Population
* Coordinates

[https://rapidapi.com/wirefreethought/api/geodb-cities/](https://rapidapi.com/wirefreethought/api/geodb-cities/)

---

### 2️⃣ OpenWeatherMap API

Provides:

* Weather conditions
* Temperature

[https://openweathermap.org/api](https://openweathermap.org/api)

---

### 3️⃣ ExchangeRate API

Used for currency conversion data.

[https://www.exchangerate-api.com/](https://www.exchangerate-api.com/)

---

##  Project Structure

```
project-folder/
│── index.html
│── style.css
│── script.js
│── README.md
│── assets/
│    └── screenshot.png
└── config.js (optional for API keys)
```

---

## ⚙ Setup & Installation

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/Travel_-_City_Info_Dashboard.git
```

### 2️⃣ Open project

```sh
cd Travel_-_City_Info_Dashboard
code .
```

### 3️⃣ Install Live Server in VS Code

Extensions → Search **Live Server** → Install

---

## ▶️ How to Run with Live Server

1. Right-click the `index.html` file
2. Select **Open with Live Server**
3. Your app will launch at:

```
http://localhost:5500
```

---

##  Environment Variables (API Keys)

Create a file named:

```
config.js
```

Add:

```js
const API_KEYS = {
  RAPID_API: "YOUR_RAPIDAPI_KEY",
  OPEN_WEATHER: "YOUR_OPENWEATHER_KEY",
  EXCHANGE_RATE: "YOUR_EXCHANGERATE_KEY"
};
```

Include it before `script.js`:

```html
<script src="config.js"></script>
<script src="script.js"></script>
```

---

##  Usage Guide

1. Enter a city name
2. Select from auto-suggestions
3. App loads:

   * Weather
   * Currency
   * Population
   * Coordinates
4. Click **Reset** to clear the search

---

##  Auto-Suggestion Feature

* Uses GeoDB API
* Suggests cities while typing
* Includes country code for clarity

Example:

```
Paris, FR  
Paris, US  
Paris, CA
```

---

##  Handling Duplicate City Names

If a city exists in multiple countries:

* The app shows all matching cities
* User selects the correct one
* Weather is fetched using exact **lat/lon**

---

##  Contribution Workflow (Group Project)

###  1. NEVER push directly to `main`

###  2. Every member creates their own branch

Examples:

```
feature-ui
feature-weather-api
feature-autocomplete
bugfix-currency-issue
docs-update-readme
```

###  3. Pull Request (PR) Process

* Push your branch
* Create PR on GitHub
* Team reviews
* Merge after approval

---

##  Branch Naming Convention

| Type          | Example                   |
| ------------- | ------------------------- |
| Feature       | `feature-ui-improvements` |
| Bugfix        | `bugfix-weather-api`      |
| Documentation | `docs-readme-update`      |
| Release       | `release-v1.0`            |

---

##  Commit Message Convention

```
type: description
```

Examples:

```
feat: implemented weather API integration
fix: corrected search dropdown issue
style: improved theme colors
docs: added usage guide to README
refactor: optimized fetch functions
```

---

##  Troubleshooting

###  City not found

* Typo
* Rare city not in database

###  Weather not loading

* Wrong lat/lon
* Invalid OpenWeather key

###  Currency API not working

* Expired key
* Country currency not supported

###  Live Server not working

* Port conflict
* Restart VS Code

---

##  Team Members

| Name                 | Role                      | 
| -------------------- | ------------------------- | 
| **KMGD Tharapathi**  | Team Lead / Frontend      | 
| **Imali Attanayake** | Backend / Tester          | 
| **Nethmi Dilunika**  | UI/UX Designer / Debugger | 

---

##  License

This project is licensed under the **MIT License**.



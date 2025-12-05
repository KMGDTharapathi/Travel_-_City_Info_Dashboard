const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  userId: String,
  city: String,
  weather: Object,
  currency: Object,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Event", EventSchema);

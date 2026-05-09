const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  location: String,
  date: String,
  time: String,
  chiefGuest: String
});

module.exports = mongoose.model("Event", eventSchema);
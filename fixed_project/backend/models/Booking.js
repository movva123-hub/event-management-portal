const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userName: String,
  email: String,
  phone: String,
  eventTitle: String
});

module.exports = mongoose.model("Booking", bookingSchema);
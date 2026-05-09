const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  phone: String,
  password: String,

  // ✅ ADD ROLE HERE (INSIDE SCHEMA)
  role: {
    type: String,
    default: "user"
  }
});

module.exports = mongoose.model("User", userSchema);
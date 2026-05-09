const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");
const Event = require("./models/Event");
const Booking = require("./models/Booking");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/eventDB")
.then(()=>console.log("DB Connected"));

// REGISTER
app.post("/register", async (req,res)=>{
  await User.create(req.body);
  res.send("User registered");
});

app.get("/create-user", async (req, res) => {
  const user = new User({
    email: "movvachinnu9@gmail.com",
    phone: "9390472482",
    password: "1234"
  });

  await user.save();
  res.send("User created");
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, phone, password } = req.body;

  const user = await User.findOne({
    password,
    $or: [{ email }, { phone }]
  });

  if (user) {
    res.json({ success: true, user }); // ✅ sends role also
  } else {
    res.json({ success: false });
  }
});

// EVENTS
app.get("/events", async(req,res)=>{
  res.json(await Event.find());
});

app.post("/add-event", async(req,res)=>{
  await Event.create(req.body);
  res.send("Event added");
});

app.delete("/delete-event/:id", async(req,res)=>{
  await Event.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

// BOOKINGS
app.post("/book-event", async(req,res)=>{
  await Booking.create(req.body);
  res.send("Booked");
});

app.get("/bookings", async(req,res)=>{
  res.json(await Booking.find());
});

// TOTAL USERS
app.get("/total-users", async (req, res) => {
  const count = await User.countDocuments();
  res.json({ totalUsers: count });
});

// TOTAL EVENTS
app.get("/total-events", async (req, res) => {
  const count = await Event.countDocuments();
  res.json({ totalEvents: count });
});

// TOTAL BOOKINGS
app.get("/total-bookings", async (req, res) => {
  const count = await Booking.countDocuments();
  res.json({ totalBookings: count });
});

// CANCEL BOOKING
app.delete("/cancel-booking/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.send("Booking Cancelled");
  } catch (err) {
    res.status(500).send("Error cancelling booking");
  }
});
// CREATE ADMIN USER
app.get("/create-admin", async (req, res) => {
  try {
    const admin = new User({
      email: "admin@gmail.com",
      phone: "9999999999",
      password: "admin123",
      role: "admin"
    });

    await admin.save();
    res.send("Admin Created Successfully");
  } catch (err) {
    res.send("Error creating admin");
  }
});



app.listen(5000, ()=>console.log("Server running"));
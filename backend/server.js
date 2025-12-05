const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const passport = require("passport");
require("./config/passport");

const session = require("cookie-session");
const eventRoutes = require("./routes/events");

const app = express();

app.use(cors());
app.use(express.json());

// Cookie session for OAuth
app.use(
  session({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/events", eventRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));

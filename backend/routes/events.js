const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const passport = require("passport");

// Authenticate user with Google
router.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => res.send("Logged in!")
);

// Save event data
router.post("/save", (req, res) => {
  if (!req.user) return res.status(403).json({ error: "Not logged in" });

  const newEvent = new Event({
    userId: req.user.id,
    city: req.body.city,
    weather: req.body.weather,
    currency: req.body.currency,
  });

  newEvent.save().then((event) => res.json(event));
});

// Get user's saved events
router.get("/history", (req, res) => {
  if (!req.user) return res.status(403).json({ error: "Not logged in" });

  Event.find({ userId: req.user.id }).then((events) => res.json(events));
});

module.exports = router;

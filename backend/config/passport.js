const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config(); // Make sure this line is included

// Serialize & deserialize user
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,       // match your .env
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, // match your .env
      callbackURL: process.env.GOOGLE_CALLBACK_URL  // match your .env
    },
    (accessToken, refreshToken, profile, done) => {
      // You can save user to DB here
      return done(null, profile);
    }
  )
);

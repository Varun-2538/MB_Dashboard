require('dotenv').config();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./models/User'); // Import the User model
const authRoutes = require('./routes/auth'); // Import the authentication routes
const { googleClientID, googleClientSecret } = require('./config/keys');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Session setup
app.use(session({
  secret: 'your_secret_key', // Replace with a secure key
  resave: false,
  saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Passport serialize and deserialize user for session
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user));
});

// Configure Google OAuth strategy
passport.use(new GoogleStrategy(
  {
    clientID: googleClientID,
    clientSecret: googleClientSecret,
    callbackURL: '/auth/google/callback',
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user exists in the database
      let user = await User.findOne({ googleId: profile.id });

      // If the user doesn't exist, create a new user with default role
      if (!user) {
        user = await new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          role: 'uploader', // Default role; can be updated later
        }).save();
      }
      done(null, user);
    } catch (error) {
      console.error('Error in Google Strategy:', error);
      done(error, null);
    }
  }
));

// Use the auth routes
app.use('/auth', authRoutes);

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

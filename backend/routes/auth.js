const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();

// Google Auth route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    async (req, res) => {
      // Redirect to the front-end route
      const user = await User.findOne({ googleId: req.user.googleId });
      const redirectUrl = user.role === 'uploader' ? '/dashboard' : '/checker-dashboard';
      res.redirect(`http://localhost:3000${redirectUrl}`); // Redirect to React app
    }
  );
  

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

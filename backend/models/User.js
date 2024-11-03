const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  role: { type: String, enum: ['uploader', 'checker'], required: true },
});

module.exports = mongoose.model('User', UserSchema);

const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create User model
const User = mongoose.model('users', userSchema);

module.exports = User;

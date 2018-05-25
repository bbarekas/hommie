const mongoose = require('mongoose');

var Schema = mongoose.Schema;

// User schema
var userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    birthday: Date,
    updated: { 
        type: Date, 
        default: Date.now 
    },
    avatar: String
});

module.exports = mongoose.model('user', userSchema );

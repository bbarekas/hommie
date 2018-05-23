var mongoose = require('mongoose');

//Define a schema
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
});

// Compile user model from schema
var user = mongoose.model('user', userSchema );
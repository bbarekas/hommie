const mongoose = require('mongoose');

var Schema = mongoose.Schema;

// User schema
var userSchema = new Schema({
    first_name: String,
    family_name: String,
    email: String,
    birthday: Date,
    updated: { 
        type: Date, 
        default: Date.now 
    },
    avatar: String
});

// Virtual for this user instance URL.
userSchema
.virtual('url')
.get(function () {
  return '/users/' + this._id;
});

module.exports = mongoose.model('User', userSchema );

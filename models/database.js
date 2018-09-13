/* eslint-disable no-console */

const mongoose = require('mongoose');


const MONGO_URL = 'mongodb://localhost:27017/users';

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect the db with the url provide
try {
  mongoose.connect(MONGO_URL);
} catch (err) {
  mongoose.createConnection(MONGO_URL);
}

mongoose.connection.on('connected', () => console.log('MongoDB Connected'));
mongoose.connection.on('disconnected', () => console.log('MongoDB Disconnected'));
mongoose.connection.once('open', () => console.log('MongoDB Running'));
mongoose.connection.on('error', e => {
    console.error.bind(console, 'MongoDB connection error:')
    throw e;
  });

/*
// Set up mongoose connection
var dev_db_url = 'mongodb://localhost:27017/users'
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
*/
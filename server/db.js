// db.js

const mongoose = require('mongoose')

// Replace 'your_database_url' with your actual MongoDB connection URL
const dbUrl = 'mongodb://localhost:27017/Myresidentdb';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = mongoose
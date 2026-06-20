const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/sharkinfo';

mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bookRoute = require('./routes/bookRoute');

const app = express();
const PORT = process.env.PORT || 3000;

const MONGO_URI = 'mongodb://localhost:27017/booksdb';


mongoose.connect(MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB at', MONGO_URI);
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', bookRoute);


app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

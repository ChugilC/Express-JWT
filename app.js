require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');

const app = express();

// middleware
app.use(express.static('./public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.MONGO_URI;

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

const start = async () => {
  try {
    await connectDB(dbURI);
    app.listen(3000, () => {
      console.log('server listening...');
    });
  } catch (error) {
    console.log(error);
  }
};

start();

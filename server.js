const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const assert = require('assert');
const { forOwn } = require('lodash');

require('dotenv').config();

const port = 3000;
const url = process.env.DB_HOST;
const urlEncodedParser = express.urlencoded({ extended: true });
const app = express();

// Connect mongoDB to server
mongoose.connect(url, { useUnifiedTopology: true, useFindAndModify: false });

// set view directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// serve static files
app.use(express.static(path.join(__dirname, './static/public')));

//
// define all routes
app.get('/', (req, res) => {
  res.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { pageTitle: 'About' });
});

app.get('/login', (req, res) => {
  res.render('pages/login', { pageTitle: 'Login' });
});

// error handling
app.get('*', (req, res) => {
  res.status(404).render('pages/error', { pageTitle: 'oops..' });
});

// testing
app.listen(port, () => {
  console.log(`Express server is now listening on port ${port}!`);
});

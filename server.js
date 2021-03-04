const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const model = require('./models/model');
require('dotenv').config();

const port = 3000;
const url = process.env.DB_HOST;
const urlEncodedParser = express.urlencoded({ extended: true });
const app = express();

// Connect mongoDB to server
mongoose.connect(url, { useUnifiedTopology: true, useFindAndModify: false });

app.use(express.json());
app.use(urlEncodedParser);

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

async function getData() {
  const data = await model.find({}).lean();
  console.log(data);
}

function createNewUser(user) {
  const foo = new model({
    name: user.name,
    age: user.age,
    gender: user.gender,
  });
}
foo.save((error) => {
  error ? console.log(`Something went wrong: ${error}`) : console.log('foo');
});

// testing
app.listen(port, () => {
  console.log(`Express server is now listening on port ${port}!`);
});

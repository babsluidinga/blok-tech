const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// set view directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// serve static files
app.use(express.static(path.join(__dirname, './static/public')));

// define all routes
app.get('/', (req, res) => {
  res.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { pageTitle: 'About' });
});

app.get('/login', (req, res) => {
  res.render('pages/login', { pageTitle: 'login' });
});

// error handling
app.get('*', (req, res) => {
  res.status(404).render('pages/error', { pageTitle: 'oops..' });
});

// testing
app.listen(port, () => {
  console.log(`Express server is now listening on port ${port}!`);
});

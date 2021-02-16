const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static/public')));

app.get('/', (req, res) => {
  res.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './static/public/about.html'));
});

app.listen(port, () => {
  console.log(`Express server is now listening on port ${port}!`);
});

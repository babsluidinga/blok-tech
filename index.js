const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, './static/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './static/public/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, './static/public/about.html'));
});

app.listen(port, () => {
  console.log(`Express server is listening on port ${port}!`);
});

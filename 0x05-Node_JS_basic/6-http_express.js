const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

module.exports = app;

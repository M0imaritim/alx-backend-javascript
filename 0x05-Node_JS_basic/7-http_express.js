const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');

  try {
    // Capture console output
    const originalLog = console.log;
    const logs = [];
    console.log = (...args) => {
      logs.push(args.join(' '));
    };

    await countStudents(DATABASE);

    // Restore original console.log
    console.log = originalLog;

    res.send(`This is the list of our students\n${logs.join('\n')}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});

module.exports = app;

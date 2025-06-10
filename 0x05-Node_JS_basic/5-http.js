const http = require('http');

const args = process.argv.slice(2);

const countStudents = require('./3-read_file_async');

const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;

  if (url === '/') {
    res.end('Hello ALX!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
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

      res.end(logs.join('\n'));
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port, hostname, () => {
});

module.exports = app;

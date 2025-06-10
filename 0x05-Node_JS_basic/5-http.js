const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        // Split into lines and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        // Remove header line
        const students = lines.slice(1);

        // Filter out any remaining empty lines
        const validStudents = students.filter((student) => student.trim() !== '');

        let output = `Number of students: ${validStudents.length}\n`;

        // Group students by field
        const fields = {};

        validStudents.forEach((student) => {
          const studentData = student.split(',');
          const firstName = studentData[0];
          const field = studentData[3];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        });

        // Build output string for each field
        Object.keys(fields).forEach((field) => {
          const studentNames = fields[field];
          output += `Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}\n`;
        });

        resolve(output.trim());
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    try {
      const studentData = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentData}`);
    } catch (error) {
      res.end(`This is the list of our students\nCannot load the database`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server running on http://localhost:1245/');
});

module.exports = app;

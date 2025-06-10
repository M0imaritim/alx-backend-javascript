const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        const students = lines.slice(1);

        const validStudents = students.filter(
          (student) => student.trim() !== ''
        );

        console.log(`Number of students: ${validStudents.length}`);

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

        Object.keys(fields).forEach((field) => {
          const studentNames = fields[field];
          console.log(
            `Number of students in ${field}: ${
              studentNames.length
            }. List: ${studentNames.join(', ')}`
          );
        });

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;

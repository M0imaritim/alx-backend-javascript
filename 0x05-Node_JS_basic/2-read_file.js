const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1);

    const validStudents = students.filter((student) => student.trim() !== '');

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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

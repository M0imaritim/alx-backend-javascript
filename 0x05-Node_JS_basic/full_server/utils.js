const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      try {
        const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
        const header = lines.shift();
        const db = {};

        lines.forEach((line) => {
          const [first, , , field] = line.split(',');
          if (first && field) { // Check for valid data
            if (!db[field]) db[field] = [];
            db[field].push(first);
          }
        });

        resolve(db);
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = readDatabase;

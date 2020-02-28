var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect((err) => {
  if (err) { throw err; }
  console.log('Connected!');
});

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
module.exports = connection;


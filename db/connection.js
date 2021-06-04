//Establish the mysql connection
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1967Morgan!',
    database: 'employeeList'
},
console.log('Connected to the employeeList database.')
);



module.exports = db;
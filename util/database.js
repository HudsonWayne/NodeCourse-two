const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodecourse',
    password: '1234',
})

module.exports = pool.promise();
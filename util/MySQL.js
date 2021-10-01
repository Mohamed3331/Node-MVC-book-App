const mysql = require('mysql2')

const poolConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '25256268'
});

module.exports = poolConnection.promise() 
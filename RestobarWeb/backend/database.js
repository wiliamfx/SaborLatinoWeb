const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db_saborlatino'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Conexión con la base de datos exitosa');
});

module.exports = connection;

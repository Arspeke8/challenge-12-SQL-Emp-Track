// const mysql = require('mysql2');
// require('dotenv').config();

// const db = mysql.createConnection(
//     {
//         host: 'localhost',
//         user: 'root',
//         password: process.env.DB_PASSWORD,
//         database: 'employee_tracker_db'
//     },
//     console.log(`Connected to the employee_tracker database.`)
// );

// const pool = mysql.createPool(
//     {
//     host: 'localhost'
//     user: ' root',
//     password: process.env.DB_PASSWORD,
//     database: 'employee_tracker_db'
//     }
// );

// const promisePool = pool.promise();

// db.connect();

// module.exports = { db: db, pool: pool, promisePool: promisePool };


const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_tracker_db'
});

const promisePool = pool.promise();

pool.on('connection', (connection) => {
    console.log(`Connected to the employee_tracker database.`);
});

module.exports = { pool: pool, promisePool: promisePool };

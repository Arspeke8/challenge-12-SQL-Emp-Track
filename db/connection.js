const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASS,
        database: 'employee_tracker'
    },
    console.log(`Connected to the employee_tracker database.`)
);

const pool = mysql.createPool(
    {
    host: 'localhost'
    user: ' root',
    password: process.env.DB_PASS,
    database: 'employee_tracker'
    }
);

const promisePool = pool.promise();

db.connect();

module.exports = { db: db, pool: pool, promisePool: promisePool };

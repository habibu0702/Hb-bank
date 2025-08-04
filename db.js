const { Pool } = require('pg');

const pool = new Pool({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: 5433
});

module.exports = pool;
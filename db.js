const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: process.env.DB_PASS,
    database: "internetove_forum",
    host: "127.0.0.1",
    port: 8000
});

module.exports = pool;

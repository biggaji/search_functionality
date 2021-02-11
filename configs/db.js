const { Pool } = require("pg");

// Instanciate a new pool connection

const dbConnection = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    url: process.env.URL
});

module.exports = {
    db: dbConnection
}
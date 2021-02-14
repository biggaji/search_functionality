const { Pool } = require("pg");

// Instanciate a new pool connection

const dbConnection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    db: dbConnection
}
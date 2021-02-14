const { Pool } = require("pg");

// Instanciate a new pool connection
// for production use this connection
// while for development use the other configs
const dbConnection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = {
    db: dbConnection
}
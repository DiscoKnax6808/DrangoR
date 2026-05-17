const Database = require('better-sqlite3');

const db = new Database('serverDatabase_DO_NOT_DELETE.db');

module.exports = db;
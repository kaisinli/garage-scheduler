const sqlite3 = require("sqlite3").verbose();
const testDb = new sqlite3.Database(":memory:");

module.exports = testDb;

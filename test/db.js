const createApptsTablesStmt = require("../db/stmts/createTables");
const sqlite3 = require("sqlite3").verbose();

const testDb = new sqlite3.Database(":memory:", err => {
  if (err) return console.error(err.message);
  else console.log("Connected to SQlite test database.");
});

const createTestTable = function() {
  testDb.run(createApptsTablesStmt, [], function(err) {
    if (err) console.log(err.message);
    else console.log("Created appointments table in test database.");
  });
};

module.exports={testDb, createTestTable}
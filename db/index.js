const sqlite3 = require("sqlite3").verbose();
const createApptsTablesStmt = require("./stmts/createTables");

const db = new sqlite3.Database(":memory:", err => {
  if (err) return console.error(err.message);
  console.log("Connected to SQlite database.");
});

const createTable = function() {
  console.log("creating tables...");

  db.run(createApptsTablesStmt, [], function(err) {
    if (err) console.log(err.message);
  });
};

module.exports = { db, createTable };

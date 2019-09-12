const sqlite3 = require("sqlite3").verbose();
const createApptsTablesStmt = require("./stmts/createTables");

// creates a new db in memory
const db = new sqlite3.Database(":memory:", err => {
  if (err) return console.error(err.message);
  console.log("Connected to SQlite database.");
});

// createTable creates the appointments table in the db
const createTable = function(database, done) {
  database.run(createApptsTablesStmt, [], function(err) {
    if (err) {
      console.log(err.message);
      done(err);
    }else{
      console.log("Created appointments table in database.");
      done(null);
    }
  });
};

module.exports = { db, createTable };

const sqlite3 = require("sqlite3").verbose();
const createApptsTablesStmt = require("./stmts/createTables");

const db = new sqlite3.Database(":memory:", err => {
  if (err) return console.error(err.message);
  console.log("Connected to SQlite database.");
});

const createTable = function(database, done) {
  database.run(createApptsTablesStmt, [], function(err) {
    if (err) {
      console.log(err.message);
      done(err);
    }else{
      console.log("Created appointments table in test database.");
      done(null);
    }
  });
};

module.exports = { db, createTable };

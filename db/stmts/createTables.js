//  sql statement to create the appointments table in sqlite db

const createApptsTablesStmt =
    `CREATE TABLE IF NOT EXISTS appointments (
                firstName TEXT NOT NULL,
                lastName TEXT NOT NULL,
                email TEXT NOT NULL,
                phone TEXT NOT NULL,
                apptDate TEXT NOT NULL, 
                startTime TEXT NOT NULL, 
                endTime TEXT NOT NULL,
                price INTEGER NOT NULL,
                status TEXT NOT NULL DEFAULT "new",
                isDeleted INTEGER DEFAULT 0)`;

module.exports = createApptsTablesStmt;
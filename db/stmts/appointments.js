// sql statements to sqlite db

const getAllAppointmentsStmt = `SELECT rowid, *
                                FROM appointments 
                                WHERE  apptDate >= ? AND apptDate <= ? AND isDeleted = 0
                                ORDER BY price `;

const getOneAppointmentStmt = `SELECT rowid, *
                           FROM appointments 
                           WHERE rowid = ? AND isDeleted = 0`;

const updateApptStatusStmt = `UPDATE appointments 
                              SET status = ?
                              WHERE rowid = ?`;

const createAppointmentStmt = `INSERT INTO appointments (firstName, lastName, email, phone, apptDate, startTime, endTime, price)
                               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;





const deleteAppointmentStmt = `UPDATE appointments SET isDeleted = 1 WHERE rowid = ?`;

module.exports = {
  getAllAppointmentsStmt,
  getOneAppointmentStmt,
  updateApptStatusStmt,
  createAppointmentStmt,
  deleteAppointmentStmt
};

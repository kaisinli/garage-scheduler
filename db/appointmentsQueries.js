const {
  getAllAppointmentsStmt,
  getOneAppointmentStmt,
  updateApptStatusStmt,
  createAppointmentStmt,
  deleteAppointmentStmt
} = require("./stmts/appointments");

const createAppointment = function(db, newAppointment, done) {
  newAppointment.price = parseInt(newAppointment.price);

  const {
    firstName,
    lastName,
    email,
    phone,
    apptDate,
    startTime,
    endTime,
    price
  } = newAppointment;

  return db.run(
    createAppointmentStmt,
    [firstName, lastName, email, phone, apptDate, startTime, endTime, price],
    function(err) {
      if (err) return done(err);

      console.log(`New row added with this id: ${this.lastID}`);
      return done(null, this.lastID);
    }
  );
};

const getAllAppointments = function(db, startDate, endDate, order, done) {
  const stmtWithOrder = getAllAppointmentsStmt + order;

  return db.all(stmtWithOrder, [startDate, endDate], function(err, appts) {
    if (err) return done(err);
    return done(null, appts);
  });
};

const getOneAppointment = function(db, id, done) {
  return db.get(getOneAppointmentStmt, [id], function(err, appt) {
    if (err) return done(err);
    return done(null, appt);
  });
};

const updateStatus = function(db, id, status, done) {
  return db.run(updateApptStatusStmt, [status, id], function(err) {
    if (err) return done(err);
    return done(null);
  });
};

const deleteAppointment = function(db, id, done) {
  return db.run(deleteAppointmentStmt, [id], function(err) {
    if (err) return done(err);
    return done(null);
  });
};

module.exports = {
  getAllAppointments,
  getOneAppointment,
  createAppointment,
  updateStatus,
  deleteAppointment
};

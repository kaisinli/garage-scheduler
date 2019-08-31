const express = require("express");
const router = express.Router();
const {
  getAllAppointments,
  getOneAppointment,
  createAppointment,
  updateStatus,
  deleteAppointment
} = require("../db/appointmentsQueries");

// create new appointment
router.post("/", function(req, res) {
  const {
    firstName,
    lastName,
    email,
    phone,
    apptDate,
    startTime,
    endTime,
    price
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !apptDate ||
    !startTime ||
    !endTime ||
    !price
  ) {
    return res.sendStatus(400);
  }

  const newAppointment = {
    firstName,
    lastName,
    email,
    phone,
    apptDate,
    startTime,
    endTime,
    price
  };

  createAppointment(newAppointment, function(err, id) {
    if (err) {
      return res.sendStatus(500);
    }
    return res.send({ id });
  });
});

// fetch all appointments
router.get("/", function(req, res) {
  let { startDate, endDate, order = "ASC"} = req.body;
  if (!startDate || !endDate) return res.sendStatus(400);
  let appointments = getAllAppointments(startDate, endDate, order, function(
    err,
    appts
  ) {
    if (err) {
      return res.sendStatus(500);
    }
    return res.send(appts);
  });
});

// fetch one appointment
router.get("/:id", function(req, res) {
  let apptId = req.params.id;
  getOneAppointment(apptId, function(err, appt) {
    if (err) return res.sendStatus(500);
    return res.send(appt);
  });
});

// update status of one appointment
router.put("/:id", function(req, res) {
  let apptId = req.params.id;
  let { status } = req.body;

  if (!status) return res.sendStatus(400);

  updateStatus(apptId, status, function(err) {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
});

// soft deletes an appointment
router.delete("/:id", function(req, res) {
  let apptId = req.params.id;
  deleteAppointment(apptId, function(err) {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
});

module.exports = router;

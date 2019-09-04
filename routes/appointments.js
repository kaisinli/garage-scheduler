const express = require("express");
const router = express.Router();
const {
  getAllAppointments,
  getOneAppointment,
  createAppointment,
  updateStatus,
  deleteAppointment
} = require("../db/appointmentsQueries");

const { db } = require("../db/index");

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

  // sends error 400 if any of these parameters are missing
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

  createAppointment(db, newAppointment, function(err, id) {
    if (err) {
      return res.sendStatus(500);
    }
    return res.send({ id });
  });
});

// fetch all appointments
router.get("/", function(req, res) {
  const { startDate, endDate, order = "ASC" } = req.body;

  // sends error 400 if any of the parameters are missing
  if (!startDate || !endDate) return res.sendStatus(400);

  getAllAppointments(db, startDate, endDate, order, function(err, appts) {
    if (err) {
      return res.sendStatus(500);
    }
    return res.send(appts);
  });
});

// fetch one appointment
router.get("/:id", function(req, res) {
  const apptId = req.params.id;
  getOneAppointment(db, apptId, function(err, appt) {
    if (err) return res.sendStatus(500);

    // if appointment doesn't exsit, sends a 404
    if (!appt) return res.sendStatus(404);
    return res.send(appt);
  });
});

// update status of one appointment
router.put("/:id", function(req, res) {
  const apptId = req.params.id;
  const { status } = req.body;

  // sends error 400 if client doesn't send status in their request
  if (!status) return res.sendStatus(400);

  updateStatus(db, apptId, status, function(err) {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
});

// soft deletes an appointment
router.delete("/:id", function(req, res) {
  const apptId = req.params.id;
  deleteAppointment(db, apptId, function(err) {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
});

module.exports = router;

const testDb = require("./db");
const { createTable } = require("../db");
const expect = require("chai").expect;
const {
  testRequests,
  getAllResponse,
  getOneResponse,
  updatedResponse
} = require("./testData");

// import functions to be tested
const {
  getAllAppointments,
  getOneAppointment,
  createAppointment,
  updateStatus,
  deleteAppointment
} = require("../db/appointmentsQueries");

describe("Connection", function() {
  //create test db
  before(function(done) {
    createTable(testDb, done);
  });

  after(function() {
    testDb.close();
  });

  describe("Appointments", function() {
    it("should be able to create new appointments", function(done) {
      Promise.all(
        testRequests.map(
          request =>
            new Promise((resolve, reject) => {
              createAppointment(testDb, request, function(err, id) {
                if (err) reject(err);
                resolve(id);
              });
            })
        )
      )
        .then(newAppts => {
          expect(newAppts).to.have.lengthOf(5);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it("should be fetch all appointments", function(done) {
      new Promise((resolve, reject) => {
        getAllAppointments(testDb, "2019-01-01", "2019-12-31", "ASC", function(
          err,
          appts
        ) {
          if (err) reject(err);
          resolve(appts);
        });
      })
        .then(appts => {
          expect(appts).to.have.lengthOf(3);
          expect(appts).deep.equal(getAllResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it("should fetch one appointment", function(done) {
      new Promise((resolve, reject) => {
        getOneAppointment(testDb, 3, function(err, appt) {
          if (err) reject(err);
          resolve(appt);
        });
      })
        .then(appt => {
          expect(appt).deep.equal(getOneResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it("should update the status of an appointment", function(done) {
      new Promise((resolve, reject) => {
        updateStatus(testDb, 3, "In Progress", function(err) {
          if (err) reject(err);
          resolve();
        });
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            getOneAppointment(testDb, 3, function(err, appt) {
              if (err) reject(err);
              resolve(appt);
            });
          });
        })
        .then(appt => {
          expect(appt).deep.equal(updatedResponse);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it("should delete an appointment", function(done) {
      new Promise((resolve, reject) => {
        deleteAppointment(testDb, 3, function(err) {
          if (err) reject(err);
          resolve();
        });
      })
        .then(() => {
          return new Promise((resolve, reject) => {
            getAllAppointments(
              testDb,
              "2019-01-01",
              "2019-12-31",
              "ASC",
              function(err, appts) {
                if (err) reject(err);
                resolve(appts);
              }
            );
          });
        })
        .then(appts => {
          expect(appts).to.have.lengthOf(2);
          done();
        })
        .catch(err => {
          done(err);
        });
    });

    it("should not able to query a deleted appointment", function(done) {
      new Promise((resolve, reject) => {
        getOneAppointment(testDb, 3, function(err, appt) {
          if (err) reject(err);
          resolve(appt);
        });
      })
        .then(appt => {
          expect(appt).deep.equal(undefined);
          done();
        })
        .catch(err => {
          done(err);
        });
    });
  });
});

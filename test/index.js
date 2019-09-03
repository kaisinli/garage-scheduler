const testDb = require("./db");
const {createTable} = require("../db")
const assert = require("chai").assert;
const { testRequests, newRequest } = require("./testData");

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
  before(function(testDb, done) {
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
          assert.equal(newAppts.length, 5);
          done();
        })
        .catch(err => {
          done(err);
        });
    });
  });
});

const { testDb, createTestTable } = require("./db");
const createApptsTablesStmt = require("../db/stmts/createTables");
const assert = require("chai").assert;
const { testRequests, createApptReq } = require("./testData");

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
  before(function() {
    createTestTable();
  });

  after(function() {
    testDb.close();
  });

  describe("Appointments", function() {
    it("should be able to create a new appointment", function() {
      var newAppts = [];
      testRequests.forEach(request => {
        createAppointment(testDb, request, function(err, id) {
          if (err) return err;
          newAppts.push(id);
          assert.equal(newAppts.length, newAppts.length++);
          return id;
        });
      });
    });
  });
});

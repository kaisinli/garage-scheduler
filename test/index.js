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
      let newAppts = [];
      testRequests.forEach(request => {
        let newAppt = createAppointment(testDb, request, function(err, id) {
          if (err) return err;
          return id;
        });
        newAppts.push(newAppt);
      });
      assert.equal(newAppts.length, 5);
    });
  });

  it("should be able to retrive a specific appointment", function() {
    let apptDetails = getOneAppointment(testDb, 1, function(err, appt) {
      if (err) return err;
      return appt;
    });

    assert.equal("hello".length, 5);
  });
});

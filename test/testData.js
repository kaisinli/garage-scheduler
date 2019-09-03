const testRequests = [
  {
    firstName: "kaisin",
    lastName: "li",
    email: "defffe@google.com",
    phone: "786876786",
    apptDate: "2020-11-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 10.0
  },

  {
    firstName: "kaisin",
    lastName: "li",
    email: "defffe@google.com",
    phone: "786876786",
    apptDate: "2019-11-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 0.0
  },

  {
    firstName: "kaisin",
    lastName: "li",
    email: "defffe@google.com",
    phone: "786876786",
    apptDate: "2019-05-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 28.0
  },

  {
    firstName: "kaisin",
    lastName: "li",
    email: "defffe@google.com",
    phone: "786876786",
    apptDate: "2019-05-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 6.0
  },

  {
    firstName: "kaisin",
    lastName: "li",
    email: "defffe@google.com",
    phone: "786876786",
    apptDate: "2018-01-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 3.0
  }
];

const getAllResponse = [
  {
    rowid: 2,
    firstName: "kaisin",
    lastName: "li",
    email: "defffe@google.com",
    phone: "786876786",
    apptDate: "2019-11-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 0,
    status: "new",
    isDeleted: 0
  },
  {
    rowid: 4,
    firstName: "kaisin",
    lastName: "li",
    email: "defffe@google.com",
    phone: "786876786",
    apptDate: "2019-05-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 6,
    status: "new",
    isDeleted: 0
  },
  {
    rowid: 3,
    firstName: "kaisin",
    lastName: "li",
    email: "defffe@google.com",
    phone: "786876786",
    apptDate: "2019-05-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 28,
    status: "new",
    isDeleted: 0
  }
];

const getOneResponse = {
  rowid: 3,
  firstName: "kaisin",
  lastName: "li",
  email: "defffe@google.com",
  phone: "786876786",
  apptDate: "2019-05-01",
  startTime: "09:00:00",
  endTime: "10:00:00",
  price: 28,
  status: "new",
  isDeleted: 0
};

const updatedResponse = {
  rowid: 3,
  firstName: "kaisin",
  lastName: "li",
  email: "defffe@google.com",
  phone: "786876786",
  apptDate: "2019-05-01",
  startTime: "09:00:00",
  endTime: "10:00:00",
  price: 28,
  status: "In Progress",
  isDeleted: 0
};

module.exports = { testRequests, getAllResponse, getOneResponse, updatedResponse };

# Garage Scheduler



## To start the app
`npm install`
App will be running on port 3000



## APIs

#### POST /appointments
This route will create a new appointment in the database. The request body looks like:

```javascript
{
    firstName: "kaisin",
    lastName: "li",
    email: "user@email.com",
    phone: "7868767486",
    apptDate: "2020-11-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: "10.00"
}
```

The response is the id of the newly created appointment.


#### GET /appointments
This route will fetch all the appointments in the database. It will fetch all the appointments in a specified date range. The request body looks like:

```javascript
{
    startDate: "09:00:00",
    endDate: "10:00:00"
    order: "ASC" 
}
```

Order can be "ASC" or "DESC" and is optional. It will be defaulted to "ASC". 

The response looks this, appointments are aranged by price:

```javascript
[
  {
    rowid: 2,
    firstName: "kaisin",
    lastName: "li",
    email: "user@email.com",
    phone: "7868f76786",
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
    email: "user@email.com",
    phone: "7868f76786",
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
    email: "user@email.com",
    phone: "7868f76786",
    apptDate: "2019-05-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 28,
    status: "new",
    isDeleted: 0
  }

  ...
]
```


#### GET /appointments/:id
This route will one appointment in the database. `:id` is the id of the appointment the user is trying to fetch. Calling `GET /appointments/3` will have a response like this:

```javascript
{
    rowid: 3,
    firstName: "kaisin",
    lastName: "li",
    email: "user@email.com",
    phone: "7868f76786",
    apptDate: "2019-05-01",
    startTime: "09:00:00",
    endTime: "10:00:00",
    price: 28,
    status: "new",
    isDeleted: 0
  }

```


#### PUT /appointments/:id
This route updates the the status of a specific appointment. The request body looks like:

```javascript
{
    status: "In Progress"
  }

```


#### DELETE /appointments/:id
This route soft deletes an appointment. `:id` is the id of the appointment the user is trying to delete.



## Assumptions
1. User can only update the status.
2. User can still update a deleted appointment. 



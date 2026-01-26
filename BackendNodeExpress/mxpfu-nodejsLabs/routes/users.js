const express = require('express');
const router = express.Router();


let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  // Copy the code here
  res.send(JSON.stringify({ users }, null, 4));
});

function getDateFromString(strDate) {
  let [dd, mm, yyyy] = strDate.split("-")
  return new Date(parseInt(yyyy), parseInt(mm) - 1, parseInt(dd))
}
router.get("/sort", (req, res) => {
  let sortedUsers = users.sort((a, b) => getDateFromString(a.DOB) - getDateFromString(b.DOB))
  res.send(sortedUsers)
})

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  // Copy the code here
  let specificUser = users.filter((user) => user.email === req.params.email);
  res.send(JSON.stringify({ specificUser }, null, 4));
});


// GET by specific lastname request: Retrieve a list of users with lastname
router.get("/lastName/:lastName", (req, res) => {
  let filteredUsers = users.filter((user) => user.lastName === req.params.lastName)
  res.send(JSON.stringify({ filteredUsers }, null, 4))
})


// POST request: Create a new user
router.post("/", (req, res) => {
  users.push({
    "firstName": req.query.firstName,
    "lastName": req.query.lastName,
    "email": req.query.email,
    "DOB": req.query.DOB
  });
  res.send(`The user ${req.query.firstName} has been added!`);
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  const email = req.params.email;
  let filteredUsers = users.filter((user) => user.email === email);
  if (filteredUsers.length > 0) {
    let filteredUser = filteredUsers[0];
    console.log(filteredUser);
    let DOB = req.query.DOB;

    if (DOB) {
      filteredUser.DOB = DOB;
    }
    let firstName = req.query.firstName;
    if (firstName) {
      filteredUser.firstName = firstName;
    }
    let lastName = req.query.lastName;
    if (lastName) {
      filteredUser.lastName = lastName;
    }
    let email = req.query.email;
    if (email) {
      filteredUser.email = email;
    }
    users = users.filter((user) => user.email !== filteredUser.email);
    users.push(filteredUser);

    res.send(`The user ${filteredUser.firstName} with email ${filteredUser.email} has been updated!`);
  }
  else {
    res.send(`The user with email ${email} does not exist!`);
  }
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((user) => user.email !== email);
  res.send(`User wit the email ${email} deleted!`);
});

module.exports = router;


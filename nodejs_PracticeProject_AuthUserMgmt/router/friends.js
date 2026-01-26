const express = require('express');

const router = express.Router();

let friends = {
  "johnsmith@gamil.com": { "firstName": "John", "lastName": "Doe", "DOB": "22-12-1990" },
  "annasmith@gamil.com": { "firstName": "Anna", "lastName": "smith", "DOB": "02-07-1983" },
  "peterjones@gamil.com": { "firstName": "Peter", "lastName": "Jones", "DOB": "21-03-1989" }
};


// GET request: Retrieve all friends
router.get("/", (req, res) => {
  res.send(JSON.stringify(friends, null, 4));
});

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email", (req, res) => {
  let friend = friends[req.params.email];
  if (friend) {
    res.send(JSON.stringify(friend, null, 4));
  } else {
    res.send("Friend not found");
  }
});


// POST request: Add a new friend
router.post("/", (req, res) => {
  if (req.body.email) {
    if (friends[req.body.email]) {
      res.send("Friend already exists");
    } else {
      friends[req.body.email] = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "DOB": req.body.DOB
      };
      res.send("Friend added successfully");
    }
  } else {
    res.send("Email is required");
  }
});


// PUT request: Update the details of a friend with email id
router.put("/:email", (req, res) => {
  if (req.params.email) {
    if (friends[req.params.email]) {
      friends[req.params.email] = {
        "firstName": req.body.firstName || friends[req.params.email].firstName,
        "lastName": req.body.lastName || friends[req.params.email].lastName,
        "DOB": req.body.DOB || friends[req.params.email].DOB
      };
      res.send("Friend updated successfully");
    }
    else {
      res.send("Friend to update does not exist");
    }
  }
  else {
    res.send("Email is required");
  }
});


// DELETE request: Delete a friend by email id
router.delete("/:email", (req, res) => {
  if (friends[req.params.email]) {
    delete friends[req.params.email]
    res.send("Friend deleted successfully");
  }
  else {
    res.send("Friend not found");
  }
});

module.exports = router;

const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a list of all the records.
recordRoutes.route("/record").get( async function (req, res) {
  const header = req.headers["authorization"]
  if (!header) {
    res.sendStatus(403)
    console.log("no auth")
    return;
  }
  const token = header.split(" ")[1]
  
  let db_connect = dbo.getDb();
  const tokenResults = await db_connect.collection("passcode").find({token: token}).toArray()
  if (tokenResults.length != 1) {
    res.sendStatus(403)
    console.log("invalid token")
    return;
  }

  db_connect
    .collection("people")
    .find({})
    .toArray()
    .then((response) => {
      console.log(response);
      res.json(response);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(async function (req, res) {
  const header = req.headers["authorization"]
  if (!header) {
    res.sendStatus(403)
    console.log("no auth")
    return;
  }
  const token = header.split(" ")[1]
  
  let db_connect = dbo.getDb();
  const tokenResults = await db_connect.collection("passcode").find({token: token}).toArray()
  if (tokenResults.length != 1) {
    res.sendStatus(403)
    console.log("invalid token")
    return;
  }
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("people")
    .findOne(myquery)
    .then((response) => {
      console.log(response);
      res.json(response);
    });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(async function (req, response) {
  const header = req.headers["authorization"]
  if (!header) {
    res.sendStatus(403)
    console.log("no auth")
    return;
  }
  const token = header.split(" ")[1]
  
  let db_connect = dbo.getDb();
  const tokenResults = await db_connect.collection("passcode").find({token: token}).toArray()
  if (tokenResults.length != 1) {
    res.sendStatus(403)
    console.log("invalid token")
    return;
  }
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("people").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(async function (req, response) {
  const header = req.headers["authorization"]
  if (!header) {
    res.sendStatus(403)
    console.log("no auth")
    return;
  }
  const token = header.split(" ")[1]
  
  let db_connect = dbo.getDb();
  const tokenResults = await db_connect.collection("passcode").find({token: token}).toArray()
  if (tokenResults.length != 1) {
    res.sendStatus(403)
    console.log("invalid token")
    return;
  }
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("people")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete(async (req, response) => {
  const header = req.headers["authorization"]
  if (!header) {
    res.sendStatus(403)
    console.log("no auth")
    return;
  }
  const token = header.split(" ")[1]
  
  let db_connect = dbo.getDb();
  const tokenResults = await db_connect.collection("passcode").find({token: token}).toArray()
  if (tokenResults.length != 1) {
    res.sendStatus(403)
    console.log("invalid token")
    return;
  }
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("people").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;

// src/server.js
const express = require("express");
const app = express();

let x = 10; // unused variable
const fs = require("fs"); // unused import

// bad logging
console.log("Server starting...");

// missing input validation, deeply nested logic
app.get("/user", (req, res) => {
  const id = req.query.id;

  if (id) {
    if (id == "1") {
      res.send({ message: "User One", code: 200 });
    } else {
      if (id == "2") {
        res.send({ message: "User Two", code: 200 });
      } else {
        res.send({ error: "Unknown User", code: 404 });
      }
    }
  } else {
    res.send("No ID provided");
  }
});

// magic numbers, no error handling, callback anti-pattern
app.get("/file", (req, res) => {
  fs.readFile("./data/sample.txt", (err, data) => {
    if (err) {
      res.send("some error happened");
    }
    res.send(data.toString());
  });
});

// insecure eval usage (on purpose to trigger audit)
app.get("/run", (req, res) => {
  const cmd = req.query.cmd;
  res.send(eval(cmd));
});

// start server with no environment config
app.listen(3000, () => {
  console.log("Server started");
});

// src/server.js
const express = require("express");
const app = express();

// A simple endpoint
app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

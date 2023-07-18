const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

PORT = process.env.PORT || 4448;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.listen(PORT, () => {
  console.log(
    `Server up in ${process.env.NODE_ENV} mode and running on: http://127.0.0.1:${PORT}`
  );
});

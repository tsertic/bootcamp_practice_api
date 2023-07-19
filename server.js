const express = require("express");
const router = require("./routes/bootcamps");
const app = express();
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const { logger } = require("./middleware/logger");
PORT = process.env.PORT || 4448;

//DEV logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", router);
app.get("/", (req, res) => {
  console.log(req.protocol, req.originalUrl);
});
app.listen(PORT, () => {
  console.log(
    `Server up in ${process.env.NODE_ENV} mode and running on: http://127.0.0.1:${PORT}`
  );
});

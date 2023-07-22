const express = require("express");
const router = require("./routes/bootcamps");
const app = express();
require("dotenv").config();
const { connectDB } = require("./mongo_db/connect");
const morgan = require("morgan");
/* const { logger } = require("./middleware/logger");
 */
PORT = process.env.PORT || 4448;
connectDB();
//DEV logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", router);
app.get("/", (req, res) => {
  console.log(req.protocol, req.originalUrl);
});
const server = app.listen(PORT, () => {
  console.log(
    `Server up in ${process.env.NODE_ENV} mode and running on: http://127.0.0.1:${PORT}`
  );
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err}`);
  server.close(() => {
    process.exit(1);
  });
});

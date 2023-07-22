const mongoose = require("mongoose");
const connectDB = async () => {
  let mongoConnection;
  try {
    mongoConnection = await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error(error);
  }
  console.log(mongoConnection.connection.host);
};

module.exports = { connectDB };

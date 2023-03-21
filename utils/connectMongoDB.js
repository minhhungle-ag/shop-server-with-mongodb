const { default: mongoose } = require("mongoose");

async function connectMongoDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("connected mongoose");
  } catch (error) {
    console.log(error);
  }
}
module.exports = connectMongoDB;

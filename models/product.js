const { Schema, model } = require("mongoose");

const productSchema = Schema({
  title: String,
  price: String,
  description: String,

  firstPicture: String,
  secondPicture: String,
  thirdPicture: String,
  fourthPicture: String,
  fifthPicture: String,

  createdAt: String,
  updatedAt: String,
});

module.exports = model("Product", productSchema);

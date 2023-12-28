const { Schema, model } = require("mongoose");

const mountainSchema = new Schema({
  name: String,
  imageUrl: String,
  description: String,
  pass: String,
  lat: Number,
  long: Number,
});

const Mountain = model("Mountain", mountainSchema);

module.exports = Mountain;

const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  img: String,
  summary: String,
});

module.exports = mongoose.model("App", AppSchema);
const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  img: String,
  summary: String,
});

AppSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("App", AppSchema);

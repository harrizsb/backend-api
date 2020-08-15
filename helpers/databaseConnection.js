const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetch-mock-api", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connection to mongodb succeed");
});

module.exports = {
  db,
  mongoose,
};

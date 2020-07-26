//require
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://Melanie:pass123@ds253713.mlab.com:53713/heroku_zpszr500",
  {
    useMongoClient: true,
  }
);

app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

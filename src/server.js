const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
requireDir("./models");

app.use("/api", require("./routes"));

app.listen(process.env.PORT || 3333);

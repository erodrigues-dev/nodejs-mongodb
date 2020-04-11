const requireDir = require("require-dir");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

requireDir("../models");

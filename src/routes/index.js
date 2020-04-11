const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const Product = mongoose.model("Product");

router.get("/", (req, res) => {
  Product.create({
    title: "ReactJs",
    description: "curso de reactjs",
    url: "/curso/reactjs",
  });

  return res.json({ msg: "criando produto" });
});

module.exports = router;

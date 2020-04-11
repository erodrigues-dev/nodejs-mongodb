const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/products", ProductController.index);
router.post("/products", ProductController.store);

module.exports = router;

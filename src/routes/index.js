const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController");

router.get("/products", ProductController.index);
router.post("/products", ProductController.store);
router.put("/products/:id", ProductController.update);
router.get("/products/:id", ProductController.show);
router.delete("/products/:id", ProductController.destroy);

module.exports = router;

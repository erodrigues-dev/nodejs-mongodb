const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    let { page = 1, limit = 3 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const products = await Product.paginate({}, { page, limit });
    return res.json(products);
  },

  async store(req, res) {
    const { title, description, url } = req.body;
    const product = await Product.create({
      title,
      description,
      url,
    });
    return res.json(product);
  },

  async show(req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.json(product);
  },

  async update(req, res) {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json(product);
  },

  async destroy(req, res) {
    const { id } = req.params;
    const result = await Product.findByIdAndDelete(id);

    if (!result) return res.status(400).json({ message: "Product not found" });

    return res.status(204).send();
  },
};

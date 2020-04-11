const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductScheema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    value: Date.now,
  },
});

ProductScheema.plugin(mongoosePaginate);
mongoose.model("Product", ProductScheema);

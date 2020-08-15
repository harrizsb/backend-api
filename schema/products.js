const { mongoose } = require("../helpers/databaseConnection");

const productsSchema = {
  product_id: Number,
  name: String,
  shop_id: Number,
  shop_name: String,
  category_id: Number,
  desc: String,
  stock: Number,
  price: Number,
  status: String,
};

const products = new mongoose.Schema(productsSchema);

module.exports = { productsSchema, products };

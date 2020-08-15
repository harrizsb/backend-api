const { mongoose } = require("../helpers/databaseConnection");
const { products } = require("./products");

const buyer = {
  id: Number,
  name: String,
  phone: String,
  email: String,
};

const orders = new mongoose.Schema({
  order_id: Number,
  invoice_number: String,
  products: [products],
  buyer,
  shop_id: Number,
  payment_id: Number,
  recipient: {
    ...buyer,
    address: String,
  },
});

module.exports = orders;

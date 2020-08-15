const { mongoose } = require("../helpers/databaseConnection");
const orderSchema = require("../schema/orders");

const OrdersModel = mongoose.model("Orders", orderSchema);

const orders = (values) => {
  return OrdersModel.insertMany(values, (err) => {
    return err;
  });
};

const retrieveOrders = async () => {
  return await OrdersModel.find({});
};

module.exports = { orders, retrieveOrders };

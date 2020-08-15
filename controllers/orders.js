const axiosInstance = require("../helpers/axiosInstance");
const { constructResponse } = require("../helpers/response");
const { orders: ordersModel, retrieveOrders } = require("../models/orders");

const fetchOrders = async () => {
  try {
    const {
      data: { data: res_data },
    } = await axiosInstance.get("/orders");

    return orders(res_data);
  } catch (err) {
    return constructResponse(err.message);
  }
};

const orders = (values) => {
  if (values.length > 0) {
    return ordersModel(values);
  } else {
    return values;
  }
};

const getOrders = async (req, res) => {
  const tmp = await retrieveOrders();
  return res.send({ data: tmp });
};

module.exports = { fetchOrders, getOrders };

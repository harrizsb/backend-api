const axiosInstance = require("../helpers/axiosInstance");
const { constructResponse } = require("../helpers/response");
const productsModel = require("../models/products");
const { retrieveProducts } = require("../models/products");

const fetchProducts = async () => {
  try {
    const {
      data: { data: res_data },
    } = await axiosInstance.get("/products");

    return products(res_data);
  } catch (err) {
    return constructResponse(err.message);
  }
};

const products = (values) => {
  if (values.length > 0) {
    return productsModel(values);
  } else {
    return values;
  }
};

const getProducts = async (req, res) => {
  const tmp = await retrieveProducts();
  return res.send({ data: tmp });
};

module.exports = { fetchProducts, getProducts };

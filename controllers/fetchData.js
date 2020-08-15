const { fetchProducts } = require("./products");
const { fetchOrders } = require("./orders");

const fetch = async (req, res) => {
  let result = null;
  const { type } = req.body;

  switch (type) {
    case "products": {
      result = await fetchProducts();
      break;
    }

    case "orders": {
      result = await fetchOrders();
      break;
    }

    default: {
      result = constructError("Type is not defined");
      break;
    }
  }

  res.send(result || constructResponse(`Fetching ${type} done`, true));
};

module.exports = fetch;

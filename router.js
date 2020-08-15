const express = require("express");
const router = express.Router();

const fetchData = require("./controllers/fetchData");
const { getProducts } = require("./controllers/products");
const { getOrders } = require("./controllers/orders");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/fetch", fetchData);

router.get("/products", getProducts);
router.get("/orders", getOrders);

module.exports = router;

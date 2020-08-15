const { mongoose } = require("../helpers/databaseConnection");
const { products: productsSchema } = require("../schema/products");

const ProductsModel = mongoose.model("Products", productsSchema);

const products = (values) => {
  return ProductsModel.insertMany(values, (err) => {
    return err;
  });
};

const retrieveProducts = async () => {
  return await ProductsModel.find({});
};

module.exports = { products, retrieveProducts };

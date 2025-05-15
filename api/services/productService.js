// api/services/productService.js
const products = require('../data/product');

const getAllProducts = () => {
  return products;
};

const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};


module.exports = {
  getAllProducts,
  getProductById
};

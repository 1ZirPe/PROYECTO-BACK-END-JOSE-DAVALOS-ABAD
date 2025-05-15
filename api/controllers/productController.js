const productService = require('../services/productService');

const getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

const getProductById = (req, res) => {
  const id = req.params.id;
  const product = productService.getProductById(id);

  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  res.json(product);
};

module.exports = {
  getAllProducts,
  getProductById
};

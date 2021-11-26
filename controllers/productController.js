const productService = require('../services/productService');

const getAll = async (req, res) => {
  const products = await productService.getAll();
  return res.status(200).json({ result: products });
}

const createProduct = async (req, res) => {
  const newProduct = await productService.createProduct(req.body);
  console.log(newProduct);
  if (newProduct.message) {
    return res.status(newProduct.status).json({ message: newProduct.message });
  }
  return res.status(201).send('OK');
}

module.exports = {
  getAll,
  createProduct,
}
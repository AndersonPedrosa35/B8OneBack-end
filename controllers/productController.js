const productService = require('../services/productService');

const getAll = async (req, res) => {
  const products = await productService.getAll();
  return res.status(200).json({ result: products });
}

const createProduct = async (req, res) => {
  const newProduct = await productService.createProduct(req.body);
  if (newProduct.message) {
    return res.status(newProduct.status).json({ message: newProduct.message });
  }
  return res.status(201).json({ result: newProduct });
}

const deleteProductById = async (req, res) => {
  const { id } = req.body;
  const deleteProduct = await productService.deleteProductById(id);
  if (deleteProduct.message) {
    return res.status(deleteProduct.status).json({ message: deleteProduct.message })
  }
  return res.status(200).send('OK');
}

module.exports = {
  getAll,
  createProduct,
  deleteProductById
}
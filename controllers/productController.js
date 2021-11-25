const productService = require('../services/productService');

const getAll = async (req, res) => {
  const products = await productService.getAll();
  return res.status(200).json({ result: products });
}

module.exports = {
  getAll,
}
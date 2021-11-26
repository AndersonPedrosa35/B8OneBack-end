const productModel = require('../models/productModel');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
}

const createProduct = async () => {
  
}

module.exports = {
  getAll,
}
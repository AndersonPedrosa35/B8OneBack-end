const productModel = require('../models/productModel');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
}

const isValidPrices = ({ price, promotion }) => {
  if (!price || price.length === 0 || price === 0) { 
    return { status: 404, message: '"price" is required' } 
  }
  if (!promotion || promotion.length === 0) { 
    return { status: 404, message: '"promotion" is required' } 
  }
  return true;
}

const isValidText = ({ describe, title, category }) => {
  if (!describe) { 
    return { status: 404, message: '"describe" is required' } 
  }
  if (describe.length < 20) {
    return { status: 404, message: '"describe" is lower text' }
  }
  if (!title) { 
    return { status: 404, message: '"title" is required' } 
  }
  if (!category) { 
    return { status: 404, message: '"category" is required' } 
  }
  return true;
}

const createProduct = async (body) => {
  const validText = isValidText(body);
  const validPrices = isValidPrices(body);
  if (validText.message) return validText;
  if (validPrices.message) return validPrices;
  const newProduct = await productModel.createProduct(body);
  return newProduct;
}

const deleteProductById = async (id) => {
  if (!id || id.length < 15) return { status: 404, message: '"id" is invalid' }
  const deleleProduct = await productModel.deleteProductById(id);
  return deleleProduct;
}

module.exports = {
  getAll,
  createProduct,
  deleteProductById
}
const productModel = require('../models/productModel');

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
}



const validate = (body) => {
  const { image, describe, title,
    category, price, promotion } = body;
}

const createProduct = async (body) => {

}

module.exports = {
  getAll,
}
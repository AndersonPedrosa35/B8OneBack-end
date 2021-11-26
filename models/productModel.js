const connection = require('./connection');

const getAll = async () => {
  const data = await connection().then((db) => db.collection('products'));
  return data.find().toArray();
}

const createProduct = async (body) => {
  const data = await connection().then((db) => db.collection('products'));
  return data.insertOne(body);
}

const deleteProductById = async (id) => {
  const data = await connection().then((db) => db.collection('products'));
  return data.deleteOne({});
}

module.exports = {
  getAll,
  createProduct,
  deleteProductById,
}
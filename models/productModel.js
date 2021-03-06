const connection = require('./connection');
const { ObjectId } = require('mongodb')

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
  return data.deleteOne({_id: ObjectId(id)});
}

module.exports = {
  getAll,
  createProduct,
  deleteProductById,
}
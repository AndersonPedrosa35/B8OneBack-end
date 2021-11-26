const connection = require('./connection');

const getAll = async () => {
  const data = await connection().then((db) => db.collection('products'));
  return data.find().toArray();
}

module.exports = {
  getAll,
}
const connection = require('./connection');

const getAll = async () => {
  return connection.then((db) => db.collection('products').find().toArray());
}

module.exports = {
  getAll,
}
require('dotenv').config();
const { MongoClient } = require('mongodb');

let schema = null;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const { DB_NAME, DB_URL } = process.env

function connection() {
  return schema ? Promise.resolve(schema) :
    MongoClient.connect(DB_URL, OPTIONS)
    .then((conn) => conn.db(DB_NAME))
    .then((db) => {
      schema = db;
      return schema;
  })
  .catch((err) => console.error(err.message));
}

module.exports = connection;

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const productController = require('./controllers/productController');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env?.PORT || 3000;

app.get('/', (req, res) => {
  return res.status(200).send('Estamos conectados');
});

app.use('/images', express.static(path.join(__dirname, 'uploads')));

app.get('/products', productController.getAll)
  .get('/products/:id', productController.getById)
  .post('/products', productController.createProduct)
  .delete('/products/:id', productController.deleteProductById)

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
})


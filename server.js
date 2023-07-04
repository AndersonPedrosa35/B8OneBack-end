require('dotenv').config();
const express = require('express');
const app = express();
const productController = require('./controllers/productController');

const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  return res.status(200).json({message: 'Estamos conectados'});
});

app.delete('/products', productController.deleteProductById)

app.get('/products', productController.getAll);

app.post('/products', productController.createProduct);

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
})


require('dotenv').config();
const express = require('express');
const productController = require('./controllers/productController');

const app = express();
app.use(express.json());

const { PORT } = process.env;

app.get('/', (req, res) => {
  return res.status(200).send('Estamos conectados');
});

app.get('/products', productController.getAll);

app.post('/products', productController.createProduct);

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
})


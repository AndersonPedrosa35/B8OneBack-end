require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const productController = require('./controllers/productController');

console.log(process.env, 'VARIAVEIS')

const app = express();

app.use(express.json());
app.use(cors());

const { PORT } = process.env;

app.get('/', (req, res) => {
  return res.status(200).send('Estamos conectados');
});

app.use('/images', express.static(path.join(__dirname, 'uploads')));

app.delete('/products', productController.deleteProductById)

app.get('/products', productController.getAll);

app.post('/products', productController.createProduct);

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
})


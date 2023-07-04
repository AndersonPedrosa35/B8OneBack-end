require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const productController = require('./controllers/productController');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env?.PORT;

app.get('/', (req, res) => {
  return res.status(200).send('Estamos conectados');
});

// app.delete('/products', productController.deleteProductById)

// app.get('/products', productController.getAll);

// app.post('/products', productController.createProduct);

app.listen(PORT ? PORT : 3001, () => {
  console.log(`Online na porta ${PORT ? PORT : 3001}`);
})


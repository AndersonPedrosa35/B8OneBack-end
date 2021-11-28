require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const productController = require('./controllers/productController');

const app = express();

app.use(express.json());
app.use(cors());

const { PORT } = process.env;
const upload = multer({ dest: 'uploads' });

app.get('/', (req, res) => {
  return res.status(200).send('Estamos conectados');
});

app.use(express.static('uploads'));

app.delete('/products', productController.deleteProductById)

app.get('/products', productController.getAll);

app.post('/products', upload.single('file') ,productController.createProduct);

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
})


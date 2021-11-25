require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const { PORT } = process.env;

app.get('/products', (req, res) => console.log(req));

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`);
})
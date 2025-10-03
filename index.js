const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola, soy Nero y no tengo la menor idea de como Jenkins hace esta wea!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
// const { application, response } = require("express");
const path = require('path');

const express = require(`express`);
const app = express();

app.use(express.static('public'));

app.listen(3030, () => {
  console.log('puerto vivo 3030');
});

app.get('/', (request, response) => {
 response.sendFile(path.resolve(__dirname, './vistas/home.html'));
});

app.get('/carritoDeCompras', (request, response) => {
  response.sendFile(path.join(__dirname, '/vistas/carritodecompras.html'));
});

app.get('/register', (request, response) => {
  response.sendFile(path.join(__dirname, '/vistas/register.html'));
});

app.get('/login', (request, response) => {
  response.sendFile(path.join(__dirname, '/vistas/login.html'));
});

app.get('/detalleProducto', (request, response) => {
  response.sendFile(path.join(__dirname, '/vistas/detalleProducto.html'));
});

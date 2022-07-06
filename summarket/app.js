// const { application, response } = require("express");
const path = require('path');

const express = require(`express`);
const app = express();

app.use(express.static('public'));

app.listen(3030, () => {
  console.log('puerto vivo 3030');
});

app.get('/', (request, response) => {
<<<<<<< HEAD
 response.sendFile(path.resolve(__dirname, './vistas/home.html'));
=======
  response.sendFile(path.resolve(__dirname, './vistas/home.html'));
>>>>>>> d6c20ce8aeddffb9d2b250f9bf48267f8ec5aec9
});

app.get('/carritoDeCompras', (request, response) => {
  response.sendFile(path.resolve(__dirname, './vistas/carritodecompras.html'));
});

app.get('/register', (request, response) => {
  response.sendFile(path.resolve(__dirname, './vistas/register.html'));
});

app.get('/login', (request, response) => {
  response.sendFile(path.resolve(__dirname, './vistas/login.html'));
});

app.get('/detalleProducto', (request, response) => {
  response.sendFile(path.resolve(__dirname, './vistas/detalleProducto.html'));
});

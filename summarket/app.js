// const { application, response } = require("express");
const path = require('path');
const express = require('express');
const app = express();
const cpRoutes = require('./routers/carritoCompras');

app.use(express.static('public'));

app.listen(3030, () => {
  console.log('puerto vivo 3030');
});

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, './vistas/home.html'));
});

app.get('/carritoDeCompras', cpRoutes);

app.get('/register', (request, response) => {
  response.sendFile(path.resolve(__dirname, './vistas/register.html'));
});

app.get('/login', (request, response) => {
  response.sendFile(path.resolve(__dirname, './vistas/login.html'));
});

app.get('/productDetail', (request, response) => {
  response.sendFile(path.resolve(__dirname, './vistas/productDetail.html'));
});

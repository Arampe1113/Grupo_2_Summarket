// const { application, response } = require("express");
const path = require('path');
const express = require('express');
const app = express();
const cpRoutes = require('./routers/productCartRouter');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(3030, () => {
  console.log('puerto vivo 3030');
});

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/productCart', cpRoutes);

app.get('/register', (request, response) => {
  response.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (request, response) => {
  response.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/productDetail', (request, response) => {
  response.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

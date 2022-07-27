// const { application, response } = require("express");
const path = require('path');
const express = require('express');
const app = express();
const cpRoutes = require('./routers/productRouter');
const mRoutes = require('./routers/mainRouter');
const uRoutes = require('./routers/userRouter');

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(3030, () => {
  console.log('puerto vivo 3030');
});

app.get('/', mRoutes);

app.get('/productCart', cpRoutes);

app.get('/register', uRoutes);

app.get('/login', uRoutes);

app.get('/productDetail', cpRoutes);

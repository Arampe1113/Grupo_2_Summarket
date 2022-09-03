// const { application, response } = require("express");
const path = require('path');
const express = require('express');
const app = express();
const bp = require('body-parser');
const methodOverride = require('method-override');
const cpRoutes = require('./routers/productRouter');
const mRoutes = require('./routers/mainRouter');
const uRoutes = require('./routers/userRouter');

app.use(express.static('public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, '/src/views/'));

app.set('view engine', 'ejs');

app.listen(3030, () => {
  console.log('puerto vivo 3030');
});

app.use('/', mRoutes);

app.use('/products', cpRoutes);

app.use('/register', uRoutes);

app.use('/login', uRoutes);

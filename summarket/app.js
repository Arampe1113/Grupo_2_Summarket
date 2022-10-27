const path = require('path');
const express = require('express');
const session = require('express-session');
const cookies = require('cookie-parser');
const app = express();
const bp = require('body-parser');
const methodOverride = require('method-override');
const cpRoutes = require('./routers/productRouter');
const mRoutes = require('./routers/mainRouter');
const uRoutes = require('./routers/userRouter');
const userLogged = require('./middlewares/userLoggedMiddleware');
const apiuserroute =require ('./routers/api/userroute');

app.use(express.static(__dirname + '/public'));
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(
  session({
    secret: "Shhh, it's a secret",
    resave: false,
    saveUninitialized: false,
  })
);



app.use(cookies());

app.use(userLogged);

app.set('views', path.join(__dirname, '/src/views/'));

app.set('view engine', 'ejs');

app.listen(3030, () => {
  console.log('puerto vivo 3030');
});

app.use('/', mRoutes);

app.use('/products', cpRoutes);

app.use('/user', uRoutes);

app.use(apiuserroute);
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
const apiuserroute = require('./routers/api/userroute');
const apicontrollerroute = require('./routers/api/productroute');
const apimarcasroute =require('./routers/api/marcasroute');
const cors = require('cors');

app.use(cors());

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(bp.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(
  session({
    secret: "Shhh, it's a secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookies());

app.use(userLogged);

app.set('views', path.join(__dirname, '/src/views/'));

app.set('view engine', 'ejs');

app.listen(3030, () => {
  console.log('puerto vivo 3030');
});

app.locals.productsToCar = [];

app.use('/', mRoutes);

app.use('/products', cpRoutes);

app.use('/user', uRoutes);

app.use('/api/v1', apiuserroute);

app.use('/api/v1', apicontrollerroute);

app.use('/api/v1', apimarcasroute);

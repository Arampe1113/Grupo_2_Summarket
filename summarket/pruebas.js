let db = require('./database/models');

const products = db.Productos;

products.findAll().then((products) => {
  return products;
});

function agregarProducto(id) {
  console.log(id);
}

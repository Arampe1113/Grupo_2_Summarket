const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const controller = {
  index: (req, res) => {
    res.render('products/index', { products: products });
  },

  cart: (req, res) => {
    res.render('products/cart');
  },

  // productDetail: (req, res) => {
  //   res.render('products/productDetail');
  // },

  detail: (req, res) => {
    const idProduc = req.params.id;
    const product = products.find((elemento) => {
      return elemento.id == idProduc;
    });
    res.render('products/detail', { product: product });
  },
};

module.exports = controller;

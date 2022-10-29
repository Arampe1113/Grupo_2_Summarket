const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

let db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const controller = {
  products: (req, res) => {
    res.render('products/all', { products: products });
  },

  cart: (req, res) => {
    res.render('products/cart');
  },

  create: (req, res) => {
    let categorias = db.Categorias.findAll();
    let colores = db.Colores.findAll();
    let marcas = db.Marcas.findAll();

    Promise.all([categorias, colores, marcas]).then(function ([
      categorias,
      colores,
      marcas,
    ]) {
      return res.render('products/create', {
        categorias: categorias,
        marcas: marcas,
        colores: colores,
      });
    });
  },

  detail: (req, res) => {
    const idProduc = req.params.id;
    const product = products.find((elemento) => {
      return elemento.id == idProduc;
    });
    res.render('products/detail', { product: product });
  },

  store: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render('products/create', {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    /*const nuevoProducto = req.body;
    nuevoProducto.id = products.length + 1;
    nuevoProducto.image = req.file.filename;
    products.push(nuevoProducto);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')); */

    db.Productos.create({
      name: req.body.name,
      description: req.body.description,
      image: req.file.filename,
      price: req.body.price,
      discount: req.body.discount,
      quantity: req.body.quantity,
      category: req.body.category,
      color: req.body.colors,
      brand: req.body.brand,
    });
    res.redirect('/');
  },
  // Update - Form to edit
  edit: (req, res) => {
    const idProduc = req.params.id;
    const productEdit = products.find((item) => item.id == idProduc);
    res.render('products/edit', { productEdit });
  },
  // Update - Method to update
  update: (req, res) => {
    const idProduc = req.params.id;
    const productEdit = req.body;
    const product = products.find((item) => item.id == idProduc);

    product.name = productEdit.name;
    product.price = productEdit.price;
    product.discount = productEdit.discount;

    if (req.file) {
      product.image = req.file.filename;
    }

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    res.redirect('/');
  },

  destroy: (req, res) => {
    const idProduc = req.params.id;
    const productsFilter = products.filter((item) => item.id != idProduc);
    const data = JSON.stringify(productsFilter, null, ' ');
    fs.writeFileSync(productsFilePath, data);
    res.redirect('/');
  },

  carrito: (req, res) => {
    res.render('products/carrito');
  },
};

module.exports = controller;

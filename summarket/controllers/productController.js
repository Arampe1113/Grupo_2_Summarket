const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

let db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const controller = {
  products: (req, res) => {
    let producto = db.Productos.findAll();
    let categorias = db.Categorias.findAll();
    let colores = db.Colores.findAll();
    let marcas = db.Marcas.findAll();

    Promise.all([producto, categorias, colores, marcas]).then(function ([
      producto,
      categorias,
      colores,
      marcas,
    ]) {
      res.render('products/all', {
        producto: producto,
        categorias: categorias,
        marcas: marcas,
        colores: colores,
      });
    });
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
    db.Productos.findByPk(req.params.id).then(function (producto) {
     const addtocart= (producto) => {
      
      console.log('Me ejecuté', producto);
      res.render('products/carrito', { producto });       
     }
      res.render('products/detail', { producto, events:{ addtocart } });
    });
  },


  store: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      let categorias = db.Categorias.findAll();
      let colores = db.Colores.findAll();
      let marcas = db.Marcas.findAll();
      Promise.all([categorias, colores, marcas]).then(function ([
        categorias,
        colores,
        marcas,
      ]) {
        return res.render('products/create', {
          errors: resultValidation.mapped(),
          oldData: req.body,
          categorias: categorias,
          marcas: marcas,
          colores: colores,
        });
      });

      // return res.render('products/create', {
      //   errors: resultValidation.mapped(),
      //   oldData: req.body,
      // });
    } else {
      const nuevoProducto = {
        name: req.body.name,
        description: req.body.description,
        image: 'default.jpg',
        category_id: req.body.category,
        price: req.body.price,
        discount: req.body.discount,
        quantity: req.body.quantity,
        brand_id: req.body.brands,
        color_id: req.body.colors,
      };

      if (req.file) {
        nuevoProducto.image = req.file.filename;
      }

      db.Productos.create(nuevoProducto);
      res.redirect('/products');
    }

    /*const nuevoProducto = req.body;
    nuevoProducto.id = products.length + 1;
    nuevoProducto.image = req.file.filename;
    products.push(nuevoProducto);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' ')); */
  },
  // Update - Form to edit
  edit: (req, res) => {
    let producto = db.Productos.findByPk(req.params.id);
    let categorias = db.Categorias.findAll();
    let colores = db.Colores.findAll();
    let marcas = db.Marcas.findAll();

    Promise.all([producto, categorias, colores, marcas]).then(function ([
      producto,
      categorias,
      colores,
      marcas,
    ]) {
      res.render('products/edit', {
        producto: producto,
        categorias: categorias,
        marcas: marcas,
        colores: colores,
      });
    });

    // const productEdit = products.find((item) => item.id == idProduc);
  },
  // Update - Method to update
  update: (req, res) => {
    const productoEdit = {
      name: req.body.name,
      description: req.body.description,
      category_id: req.body.category,
      price: req.body.price,
      discount: req.body.discount,
      quantity: req.body.quantity,
      brand_id: req.body.brands,
      color_id: req.body.colors,
    };

    if (req.file) {
      productoEdit.image = req.file.filename;
    }
    db.Productos.update(productoEdit, {
      where: {
        id: req.params.id,
      },
    });
    res.redirect('/products/detail/' + req.params.id);
    // const idProduc = req.params.id;
    // const productEdit = req.body;
    // const product = products.find((item) => item.id == idProduc);

    // product.name = productEdit.name;
    // product.price = productEdit.price;
    // product.discount = productEdit.discount;

    // if (req.file) {
    //   product.image = req.file.filename;
    // }

    // fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
    // res.redirect('/');
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

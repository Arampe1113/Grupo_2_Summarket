const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf8'));

const controller = {
  index: (req, res) => {
    res.render('index', { products: products });
  },
};

module.exports = controller;

// const path=requiere ("path");
// const db=requiere ("../../database/models");
// const sequielize=db.sequielize;
// conts { Op}=requiere ("sequelize");
// cont moment=requiere ("moment");

// const producto
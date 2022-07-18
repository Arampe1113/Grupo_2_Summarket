const express = require('express');
const path = require('path');

const controller = {
  carritoCompras: (req, res) => {
    res.render('carritodecompras');
  },
};

module.exports = controller;

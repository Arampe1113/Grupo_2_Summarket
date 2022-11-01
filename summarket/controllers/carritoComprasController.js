const express = require('express');
const path = require('path');

const controller = {
  carritoCompras: (req, res) => {
    res.sendFile(path.join(__dirname, '../vistas/carritodecompras.html'));
  },
};

module.exports = controller;

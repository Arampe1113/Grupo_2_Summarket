const express = require('express');
const path = require('path');

const controller = {
  productCart: (req, res) => {
    res.render('productCart');
  },
};

module.exports = controller;

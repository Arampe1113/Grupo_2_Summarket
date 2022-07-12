const express = require('express');
const router = express.Router();
const carritoComprasController = require('../controllers/carritoComprasController');

router.get('/carritoDeCompras', carritoComprasController.carritoCompras);

module.exports = router;

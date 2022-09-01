const express = require('express');
const router = express.Router();
const productCont = require('../controllers/productController');

router.get('/', productCont.index);

router.get('/Cart', productCont.cart);

// /*** GET ONE PRODUCT ***/
router.get('/detail/:id/', productCont.detail);

// /*** EDIT ONE PRODUCT ***/
// router.get('/edit/:id/', productsController.edit);
// router.put('/edit/:id', productsController.update);

module.exports = router;

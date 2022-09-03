const express = require('express');
const router = express.Router();
const productCont = require('../controllers/productController');

router.get('/', productCont.index);

router.get('/Cart', productCont.cart);

// /*** GET ONE PRODUCT ***/
router.get('/detail/:id/', productCont.detail);

// /*** CREATE ONE PRODUCT ***/
router.get('/create', productCont.create);
router.post('/', productCont.store);

// /*** EDIT ONE PRODUCT ***/
router.get('/edit/:id/', productCont.edit);
router.put('/edit/:id', productCont.update);

// /*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productCont.destroy);

module.exports = router;

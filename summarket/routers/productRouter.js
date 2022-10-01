const express = require('express');
const router = express.Router();
const multer = require('multer');
const productCont = require('../controllers/productController');

// Middlewares
const auth = require('../middlewares/authMiddleware');
const upload = require('../middlewares/multerMiddleware');

router.get('/', productCont.products);

router.get('/Cart', auth, productCont.cart);

// /*** GET ONE PRODUCT ***/
router.get('/detail/:id/', productCont.detail);

// /*** CREATE ONE PRODUCT ***/
router.get('/create', auth, productCont.create);
router.post('/', upload.single('product-img'), productCont.store);

// /*** EDIT ONE PRODUCT ***/
router.get('/edit/:id/', productCont.edit);
router.put('/edit/:id', productCont.update);

// /*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productCont.destroy);

module.exports = router;

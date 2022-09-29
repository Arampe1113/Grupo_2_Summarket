const express = require('express');
const router = express.Router();
const multer = require('multer');
const productCont = require('../controllers/productController');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/products');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.get('/', productCont.products);

router.get('/Cart', productCont.cart);

// /*** GET ONE PRODUCT ***/
router.get('/detail/:id/', productCont.detail);

// /*** CREATE ONE PRODUCT ***/
router.get('/create', productCont.create);
router.post('/', upload.single('product-img'), productCont.store);

// /*** EDIT ONE PRODUCT ***/
router.get('/edit/:id/', productCont.edit);
router.put('/edit/:id', productCont.update);

// /*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', productCont.destroy);

module.exports = router;

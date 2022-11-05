const express = require('express');
const router = express.Router();
const productCont = require('../controllers/productController');

// Middlewares
const auth = require('../middlewares/authMiddleware');
const validations = require('../middlewares/productcreatemiddleware');
const admin = require('../middlewares/adminMiddleware');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/products');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.get('/', productCont.products);

router.get('/Cart', auth, productCont.cart);

// /*** GET ONE PRODUCT ***/
router.get('/detail/:id/', productCont.detail);

// /*** CREATE ONE PRODUCT ***/
router.get('/create', auth, productCont.create);
router.post('/', upload.single('productImg'), validations, productCont.store);

// /*** EDIT ONE PRODUCT ***/
router.get('/edit/:id/', auth, productCont.edit);
router.put(
  '/edit/:id',
  upload.single('productImg'),
  validations,
  productCont.update
);

// /*** DELETE ONE PRODUCT***/
router.delete('/delete/:id', auth, productCont.destroy);

router.get('/Cart', auth, productCont.cart);

module.exports = router;

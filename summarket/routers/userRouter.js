const express = require('express');
const router = express.Router();
const multer = require('multer');
const userCont = require('../controllers/userController');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/images/users');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.get('/register', userCont.register);

router.get('/login', userCont.login);

// /*** CREATE new user***/
router.get('/register', userCont.register);
router.post('/', upload.single, userCont.save);

module.exports = router;

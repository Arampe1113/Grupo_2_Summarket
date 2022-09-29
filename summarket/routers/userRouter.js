const express = require('express');
const router = express.Router();

//Controller
const userCont = require('../controllers/userController');

// Middlewares
const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');

/*** Loging***/

router.get('/login', userCont.login);
router.post('/login', userCont.processLogin);

// /*** CREATE new user***/
router.get('/register', userCont.register);
router.post(
  '/register',
  upload.single('userImage'),
  validations,
  userCont.save
);

router.get('/profile/:userID', userCont.profile);

module.exports = router;

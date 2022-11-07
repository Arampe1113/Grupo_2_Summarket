const express = require('express');
const router = express.Router();

//Controller
const userCont = require('../controllers/userController');

// Middlewares
const upload = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guest = require('../middlewares/guestMiddleware');
const auth = require('../middlewares/authMiddleware');

/*** Loging***/

router.get('/login', guest, userCont.login);
router.post('/login', userCont.processLogin);

// /*** CREATE new user***/
router.get('/register', guest, userCont.register);
router.post(
  '/register',
  upload.single('userImage'),
  validations,
  userCont.save
);

//User Profile
router.get('/profile', auth, userCont.profile);

//Logut
router.get('/logout', userCont.logout);

//Admin
router.get('/admin', auth, userCont.admin);
router.put('/update/:id', auth, userCont.updateRol);

module.exports = router;

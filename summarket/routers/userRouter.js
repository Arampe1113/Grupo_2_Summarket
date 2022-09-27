const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const userCont = require('../controllers/userController');
const { body } = require('express-validator');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/users');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({ storage: storage });

const validations = [
  body('firstName')
    .notEmpty()
    .withMessage('El campo Nombre no puede estar vacio'),
  body('lastName')
    .notEmpty()
    .withMessage('El campo Apellidos no puede estar vacio'),
  body('email')
    .notEmpty()
    .withMessage('Debes escribir un correo electronico')
    .bail()
    .isEmail()
    .withMessage('Debes usar un formato de correo valido @...'),
  body('password').notEmpty().withMessage('Debes escribir una contraseña'),
  body('userImage').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!file) {
      throw new Error('Tienes que subir una imagen');
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error('Solo se permiten imagenes en formato jpg, png o gif');
      }
    }

    return true;
  }),
];

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

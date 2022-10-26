const { body } = require('express-validator');
const path = require('path');
const user = require('../models/Users');

module.exports = [
  body('firstName')
    .notEmpty()
    .withMessage('El campo Nombre no puede estar vacio')
    .bail()
    .isLength({ min: 2 })
    .withMessage('El nombre debe tener al menos dos caracteres'),
  body('lastName')
    .notEmpty()
    .withMessage('El campo Apellidos no puede estar vacio')
    .bail()
    .isLength({ min: 2 })
    .withMessage('El apellido debe tener al menos dos caracteres'),
  body('email')
    .notEmpty()
    .withMessage('Debes escribir un correo electronico')
    .bail()
    .isEmail()
    .withMessage('Debes usar un formato de correo valido @...')
    .bail()
    .custom((value, { req }) => {
      let email = req.body.email;
      let validation = user.findByField('email', email);
      if (validation) {
        throw new Error(
          'Este correo ya está registrado en nuestra base de datos'
        );
      } else {
        return true;
      }
    }),

  body('password')
    .notEmpty()
    .withMessage('Debes escribir una contraseña')
    .bail()
    .isLength({ min: 8 })
    .withMessage('Debe tener al menos 8 caracteres')
    .bail()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/)
    .withMessage(
      'Tu contraseña debe incluir una letra mayuscula, minuscula, un numero y un caracter especial'
    ),

  body('userImage').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

    if (!file) {
      throw new Error('Tienes que subir una imagen');
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          'Solo se permiten imagenes en formato jpg, png, jpeg o gif'
        );
      }
    }

    return true;
  }),
];

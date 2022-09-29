const { body } = require('express-validator');

module.exports = [
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

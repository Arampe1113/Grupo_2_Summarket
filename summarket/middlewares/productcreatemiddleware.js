const { body } = require('express-validator');
const path = require('path');

module.exports = [
  body('name')
    .notEmpty()
    .withMessage('El campo Nombre no puede estar vacio')
    .bail()
    .isLength({ min: 5 })
    .withMessage('Debe tener al menos 5 caracteres'),

  body('description')
    .notEmpty()
    .withMessage('Debes dar una descripción del producto')
    .bail()
    .isLength({ min: 20 })
    .withMessage('Debe tener al menos 20 caracteres'),

  body('productImg').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif', '.jpeg'];

    if (!file) {
      throw new Error('Tienes que subir una imagen de tu producto');
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          'Solo se permiten imagenes en formato jpg, jpeg, png o gif'
        );
      }
    }

    return true;
  }),
];

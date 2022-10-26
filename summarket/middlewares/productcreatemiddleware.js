const { body } = require('express-validator');
const path = require('path');

module.exports = [
  body('name')
    .notEmpty()
    .withMessage('El campo Nombre no puede estar vacio')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Debe tener al menos 2 caracteres')
    .bail()
    .isLength({ max: 2 })
    .withMessage('Debe tener menos de 20 caracteres'),

  body('price')
    .notEmpty()
    .withMessage('El precio debe ser entre 10 y 10000000')
    .bail()
    .isLength({ min: 4 })
    .withMessage('Debe tener al menos 4 caracteres')
    .bail()
    .isLength({ max: 8 })
    .withMessage('Debe tener al menos 8 caracteres'),

  body('discount')
    .notEmpty()
    .withMessage('Debes incluir un descuento para que se venda facil')
    .bail()
    .isLength({ min: 1 })
    .withMessage('Debe tener al menos 1 caracteres')
    .bail()
    .isLength({ max: 3 })
    .withMessage('Debe tener al menos 3 caracteres'),

  body('Color')
    .notEmpty()
    .withMessage('Debes decirnos de que color es')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Debe tener al menos 2 caracteres')
    .bail()
    .isLength({ max: 20 })
    .withMessage('Debe tener menos de 20 caracteres'),

  body('category')
    .notEmpty()
    .withMessage('a que categoría pertenece')
    .bail()
    .isLength({ min: 2 })
    .withMessage('Debe tener al menos 2 caracteres')
    .bail()
    .isLength({ max: 20 })
    .withMessage('Debe tener menos de 20 caracteres'),

  body('description')
    .notEmpty()
    .withMessage('Debes indicarnos como es')
    .bail()
    .isLength({ min: 50 })
    .withMessage('Debe tener al menos 50 caracteres')
    .bail()
    .isLength({ max: 200 })
    .withMessage('Debe tener menos de 200 caracteres'),

  body('productImg').custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = ['.jpg', '.png', '.gif'];

    if (!file) {
      throw new Error('Tienes que subir una imagen de tu producto');
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error('Solo se permiten imagenes en formato jpg, png o gif');
      }
    }

    return true;
  }),
];

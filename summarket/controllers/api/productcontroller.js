const db = require('../../database/models');
const sequelize = db.sequelize;
// const User = require('../../database/models/Usuario.js');

// exports.index=fuction(req,res,next){
//     models.user.findAll({attributes: ["id", "username"]});
// };
const productcontroller = {
  list: (req, res) => {
    // let producto = db.Productos.findAll();
    // let categorias = db.Categorias.findAll();
    // let colores = db.Colores.findAll();
    // let marcas = db.Marcas.findAll();

    // Promise.all([producto, categorias, colores, marcas]).then((product) => {
    //   res.json({
    //     meta: {
    //       url: 'api/v1/products',
    //     },
    //     data: product,
    //   });
    // });

        db.Productos.findAll()
        .then (product => {
            res.json({
                meta: {
                    url: "api/v1/products"
                },
                data: product
            })
        })
    },
  detail: (req, res) => {
    db.Productos.findByPk(req.params.id).then((product) => {
      res.json({
        meta: {
          url: 'api/v1/products/:id',
        },
        data: product,
      });
    });
  },
};

module.exports = productcontroller;

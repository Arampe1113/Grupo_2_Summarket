const db = require('../../database/models');
const sequelize = db.sequelize;
// const User = require('../../database/models/Usuario.js');

// exports.index=fuction(req,res,next){
//     models.user.findAll({attributes: ["id", "username"]});
// };
const marcascontroller = {
  list: (req, res) => {
    // let producto = db.Productos.findAll();
    // let categorias = db.Categorias.findAll();
    // let colores = db.Colores.findAll();
    let marcas = db.Marcas.findAll();

    Promise.all([ marcas]).then((marcas) => {
      res.json({
        meta: {
          url: 'api/v1/marcas',
        },
        data: marcas,
      });
    });
},
  detail: (req, res) => {
    db.Productos.findByPk(req.params.id).then((product) => {
      res.json({
        meta: {
          url: 'api/v1/marcas/:id',
        },
        data: product,
      });
    });
  },
};

module.exports = marcascontroller;

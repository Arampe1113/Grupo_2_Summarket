const db=require("../../database/models");
const sequelize = db.sequelize;
// const User = require('../../database/models/Usuario.js');

// exports.index=fuction(req,res,next){
//     models.user.findAll({attributes: ["id", "username"]});
// };
const productcontroller = {
    list:(req,res) => {
        db.Productos.findAll()
        .then (product => {
            res.json({product})
        })
    },
    detail:(req,res) =>{
        db.Productos.findByPk (req,params.id)
        .then (product => {
            res.json({product});
            console.log(productcontroller); 
        });
    }
}


module.exports = productcontroller;
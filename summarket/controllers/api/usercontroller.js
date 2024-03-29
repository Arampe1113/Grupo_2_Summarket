const db=require("../../database/models");
const sequelize = db.sequelize;
// const User = require('../../database/models/Usuario.js');

// exports.index=fuction(req,res,next){
//     models.user.findAll({attributes: ["id", "username"]});
// };
const usercontroller = {
    list:(req,res) => {
        db.Usuario.findAll()
        .then (user=> {
            res.json({
                meta: {
                    url: "api/v1/user"
                },
                data: user
            })
        })
    },
        detail:(req,res) => {
            db.Usuario.findByPk(req.params.id)
            .then (user => {
                res.json({
                    meta: {
                        url: "api/v1/user/:id"
                    },
                    data: user
                })
            })
        },

        detail2:(req,res) => {
            db.Usuario.findByPk(req.params.firstName)
            .then (user => {
                res.json({
                    meta: {
                        url: "api/v1/user/:firstName"
                    },
                    data: user
                })
            })
        },
}


// const usercontroller = {
//     list:(req,res) => {
//         db.Usuario.findAll()
//         .then (user => {
//             res.json({user})
//         })
//     },
//     detail:(req,res) =>{
//         db.Usuario.findByPk (req,params.id)
//         .then (user => {
//             res.json({user});

//             console.log(usercontroller);

//         });
//     }
// }

module.exports = usercontroller;
const db= require ("../../database/models/Usuario");
const sequelize = db.sequelize;

// exports.index=fuction(req,res,next){
//     models.user.findAll({attributes: ["id", "username"]});
// };


const usercontroller = {
    "list":(req,res) => {
        db.user.findAll()
        .then (user => {
            res.JSON ("userlist.ejs", {users})
        })
    },
    "detail":(req,res) =>{
        db.user.findByPk (req,params.id)
        .then (user => {
            res.JSON("userdetail.ejs", {users2});

        });

    }
}
module.exports = usercontroller;
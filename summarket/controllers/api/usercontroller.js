const db= require ("../../database/models/Usuario");
const sequelize = db.sequelize;

// exports.index=fuction(req,res,next){
//     models.user.findAll({attributes: ["id", "username"]});
// };


const usercontroller = {
    "list":(req,res) => {
        db.user.findAll()
        .then (user => {
            res.JSON ("userList.ejs", {users})
        })
    },
    "detail":(req,res) =>{
        db.user.findByPk (req,params.id)
        .then (user => {
            res.JSON("userDetail.ejs", {users2});

        });

    }
}
module.exports = usercontroller;
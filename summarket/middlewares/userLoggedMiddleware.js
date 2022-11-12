// const user = require('../models/Users');

let db = require('../database/models');

const User = db.Usuario;

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  let userFromCookie;

  if (req.session && req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  } else {
    if (req.cookies.userEmail) {
      let userFromCookie = req.cookies.userEmail;

      User.findOne({
        where: {
          email: userFromCookie,
        },
      }).then((userFromCookie) => {
        if (userFromCookie) {
          res.locals.isLogged = true;
          res.locals.userLogged = req.session.userLogged = userFromCookie;
        }
      });
    }
  }
  next();

  // res.locals.isLogged = false;
  // let emailInCookie = req.cookies.userEmail;

  // if (emailInCookie != undefined) {
  //   User.findOne({
  //     where: {
  //       email: emailInCookie,
  //     },
  //   }).then((userFromCookie) => {
  //     req.session.userLogged = userFromCookie;

  //     if (req.session.userLogged) {
  //       res.locals.isLogged = true;
  //       console.log(res.locals.isLogged);
  //       res.locals.userLogged = req.session.userLogged;
  //     }
  //   });
  // }
  // next();
}

// let userInCookie = user.findByField('email', emailCookie);

module.exports = userLoggedMiddleware;

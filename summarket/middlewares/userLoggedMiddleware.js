// const user = require('../models/Users');

let db = require('../database/models');

const User = db.Usuario;

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  let emailCookie = req.cookies.userEmail;

  // console.log('middleware console log');
  // console.log(emailCookie);

  if (emailCookie != undefined) {
    User.findOne({
      where: {
        email: emailCookie,
      },
    }).then((userFromCookie) => {
      req.session.userLogged = userFromCookie;

      if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
      }
    });
  }
  next();
}

// let userInCookie = user.findByField('email', emailCookie);

module.exports = userLoggedMiddleware;

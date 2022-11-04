const user = require('../models/Users');

let db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  let emailCookie = req.cookies.userEmail;

  if (emailCookie != undefined) {
    db.Usuario.findOne({
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

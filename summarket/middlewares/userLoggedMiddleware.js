const user = require('../models/User');

function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  let emailCookie = req.cookies.userEmail;
  let userInCookie = user.findByField('email', emailCookie);

  if (userInCookie) {
    req.session.userLogged = userInCookie;
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMiddleware;

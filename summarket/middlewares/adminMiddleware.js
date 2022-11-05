let db = require('../database/models');

const User = db.Usuario;

function adminMiddleware(req, res, next) {
  let emailCookie = req.session.email;

  User.findOne({
    where: {
      email: emailCookie,
    },
  }).then((userFromCookie) => {
    if (userFromCookie.rol != 'admin') {
      return res.redirect('/products');
    }
  });
  next();
}

module.exports = adminMiddleware;

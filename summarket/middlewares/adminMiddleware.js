let db = require('../database/models');

const User = db.Usuario;

function adminMiddleware(req, res, next) {
  let emailCookie = req.cookies.userEmail;
  console.log('Auth Middleware');
  console.log(emailCookie);

  if (emailCookie != undefined) {
    User.findOne({
      where: {
        email: emailCookie,
      },
    }).then((userFromCookie) => {
      if (userFromCookie.rol != 'admin') {
        return res.redirect('/products');
      }
    });
  }

  next();
}

module.exports = adminMiddleware;

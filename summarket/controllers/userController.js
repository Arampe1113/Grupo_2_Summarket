const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/User');

const controller = {
  login: (req, res) => {
    res.render('users/login');
  },

  processLogin: (req, res) => {
    let userToLogin = User.findByField('email', req.body.emailLogin);

    if (userToLogin) {
      let passwordOk = bcryptjs.compareSync(
        req.body.passwordLogin,
        userToLogin.password
      );
      if (passwordOk) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.remember_user) {
          res.cookie('userEmail', req.body.emailLogin, {
            maxAge: 1000 * 60 * 2,
          });
        }

        return res.redirect('profile');
      }
      return res.render('users/login', {
        errors: {
          email: {
            msg: 'Las credenciales son invalidas',
          },
        },
      });
    }
    return res.render('users/login', {
      errors: {
        email: {
          msg: 'Correo no registrado en Summarket',
        },
      },
    });
  },

  register: (req, res) => {
    res.render('users/register');
  },

  save: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render('users/register', {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    let userInDB = User.findByField('email', req.body.email);

    if (userInDB) {
      return res.render('users/register', {
        errors: {
          email: {
            msg: 'Ya existe un usuario registrado con este correo',
          },
        },
        oldData: req.body,
      });
    }

    let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename,
    };

    let userCreate = User.create(userToCreate);

    return res.redirect('login');
  },

  profile: (req, res) => {
    return res.render('users/profile', {
      user: req.session.userLogged,
    });
  },

  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  },
};

module.exports = controller;

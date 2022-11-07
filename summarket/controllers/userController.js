const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/Users.js');
let db = require('../database/models');

const controller = {
  login: (req, res) => {
    res.render('users/login');
  },

  processLogin: (req, res) => {
    db.Usuario.findOne({
      where: {
        email: req.body.emailLogin,
      },
    }).then((userData) => {
      if (userData) {
        let isOkThePassword = bcrypt.compareSync(
          req.body.passwordLogin,
          userData.password
        );
        if (isOkThePassword) {
          delete userData.dataValues.password;
          req.session.userLogged = userData;
          if (req.body.remember_user) {
            res.cookie('userEmail', req.body.emailLogin, {
              maxAge: 2000 * 60 * 2,
            });
          }
          return res.redirect('/user/profile');
        } else {
          return res.render('users/login', {
            errors: {
              email: {
                msg: 'Las credenciales ingresadas son invalidas, ingresalas nuevamente',
              },
            },
          });
        }
      } else {
        return res.render('users/login', {
          errors: {
            email: {
              msg: 'El email o la contraseña son incorrectos o no están registrados, ingresalos nuevamente o crea tu cuenta',
            },
          },
        });
      }
    });
  },

  // let userToLogin = User.findByField('email', req.body.emailLogin);

  // if (userToLogin) {
  //   let passwordOk = bcryptjs.compareSync(
  //     req.body.passwordLogin,
  //     userToLogin.password
  //   );
  //     if (userToLogin) {
  //       delete userToLogin.password;
  //       req.session.userLogged = userToLogin;

  //       if (req.body.remember_user) {
  //         res.cookie('userEmail', req.body.emailLogin, {
  //           maxAge: 2000 * 60 * 2,
  //         });
  //       }

  //       return res.redirect('profile');
  //     }
  //     return res.render('users/login', {
  //       errors: {
  //         email: {
  //           msg: 'Las credenciales son invalidas',
  //         },
  //       },
  //     });
  //   }
  //   return res.render('users/login', {
  //     errors: {
  //       email: {
  //         msg: 'Correo no registrado en Summarket',
  //       },
  //     },
  //   });
  // },

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

    // let userInDB = User.findByField('email', req.body.email);

    db.Usuario.findOne({
      where: {
        email: req.body.email,
      },
    }).then((userFound) => {
      if (userFound) {
        return res.render('users/register', {
          errors: {
            email: {
              msg: 'Ya existe un usuario registrado con este correo',
            },
          },
          oldData: req.body,
        });
      }
    });

    /*let userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename,
      rol: 'user',
    };*/

    db.Usuario.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      avatar: req.file.filename,
      rol: 'user',
    });

    /*let userCreate = User.create(userToCreate);*/

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

  admin: (req, res) => {
    db.Usuario.findAll({
      where: {
        rol: 'user',
      },
    }).then(function (Usuario) {
      console.log(Usuario);
      return res.render('users/admin', { Usuario: Usuario });
    });
  },
};

module.exports = controller;

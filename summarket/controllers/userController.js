const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const controller = {
  login: (req, res) => {
    res.render('users/login');
  },

  processLogin: (req, res) => {
    let userToLogin = users.findByField('email', req.body.emailLogin);
    return res.send(userToLogin);
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

    return res.send('Validaciones exitosas');

    // const newUser = {
    //   firstName: req.body.firstName,
    //   lastName: req.body.lastName,
    //   email: req.body.email,
    //   password: bcrypt.hashSync(req.body.password, 10),
    //   image: req.file.filename,
    //   id: users.length + 1,
    // };
    // users.push(newUser);
    // fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    // return res.redirect('/user/login');
  },

  profile: (req, res) => {
    return res.send('Perfil de usuario');
  },
};

module.exports = controller;

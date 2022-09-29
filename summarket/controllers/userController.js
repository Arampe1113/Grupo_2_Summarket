const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/User');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const controller = {
  login: (req, res) => {
    res.render('users/login');
  },

  processLogin: (req, res) => {
    return res.send(req.body);
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
    return res.send('Perfil de usuario');
  },
};

module.exports = controller;

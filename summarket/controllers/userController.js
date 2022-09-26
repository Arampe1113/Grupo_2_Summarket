const fs = require('fs');
const path = require('path');
let bcrypt = require('bcrypt');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const controller = {
  login: (req, res) => {
    res.render('users/login');
  },

  processLogin: (req, res) => {
    const usersFilePath = path.join(__dirname, '../data/users.json');
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

    for (let i = 0; i < users.length; i++) {
      if (
        req.body.emailLogin == users[i].email &&
        bcrypt.compareSync(req.body.passwordLogin, users[i].password)
      ) {
        console.log(users[i].email + users[i].password);
        // res.send('Bienvenido');
      } else {
        res.send('error');
      }
    }
  },

  register: (req, res) => {
    res.render('users/register');
  },

  save: (req, res) => {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      image: req.file.filename,
      id: users.length + 1,
    };

    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    res.redirect('/');
  },
};

module.exports = controller;

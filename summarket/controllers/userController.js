const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf8'));

const controller = {
  login: (req, res) => {
    res.render('users/login');
  },

  register: (req, res) => {
    res.render('users/register');
  },

  save: (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    newUser.image = req.file.filename;
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
    res.redirect('/');
  },
};

module.exports = controller;

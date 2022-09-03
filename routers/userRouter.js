const express = require('express');
const router = express.Router();
const userCont = require('../controllers/userController');

router.get('/register', userCont.register);

router.get('/login', userCont.login);

module.exports = router;

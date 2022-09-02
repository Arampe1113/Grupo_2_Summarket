const express = require('express');
const router = express.Router();
const mainCont = require('../controllers/MainController');

router.get('/', mainCont.index);

module.exports = router;

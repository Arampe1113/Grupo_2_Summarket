const { Router } = require("express");
const express=require("express");
const router = require("../userRouter");
const routers = express.Router();
const apiuserscontroller = require ("../../controllers/api/usercontroller.js")


router.get ("/usuarios", apiuserscontroller.list);
router.get ("/usuarios:id", apiuserscontroller.detail);

// http://localhost:3030/api/v1/usuarios

module.exports=router;
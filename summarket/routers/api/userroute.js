const { Router } = require("express");
const express=require("express");
const router = require("../userRouter");
const routers = express.Router();
const apiuserscontroller = require ("../../controllers/api/usercontroller.js")


router.get ("/users", apiuserscontroller.list);
router.get ("/users/:id", apiuserscontroller.detail);
router.get ("/users/:firstName", apiuserscontroller.detail2);

// http://localhost:3030/api/v1/users

module.exports=router;
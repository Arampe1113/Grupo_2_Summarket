const { Router } = require("express");
const express=require("express");
const router = require("../productRouter");
const routers = express.Router();
const apiuserscontroller = require ("../../controllers/api/usercontroller.js")


router.get ("/api/vi", apiuserscontroller.list);
router.get ("/api/v1:id", apiuserscontroller.detail);

module.exports=router;
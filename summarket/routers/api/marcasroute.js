const { Router } = require("express");
const express=require("express");
const router = require("../productRouter");
const routers = express.Router();
const marcascontroller = require ("../../controllers/api/marcascontroller.js")


router.get ("/marcas", marcascontroller.list);
router.get ("/marcas/:id", marcascontroller.detail);

// http://localhost:3030/api/v1/marcas

module.exports=router;
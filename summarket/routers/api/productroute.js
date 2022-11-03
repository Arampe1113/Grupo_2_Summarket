const { Router } = require("express");
const express=require("express");
const router = require("../productRouter");
const routers = express.Router();
const productcontroller = require ("../../controllers/api/productcontroller.js")


router.get ("/products", productcontroller.list);
router.get ("/products:id", productcontroller.detail);

// http://localhost:3030/api/v1/products

module.exports=router;
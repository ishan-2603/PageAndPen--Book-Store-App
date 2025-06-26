const express=require("express");
const {createOrder, getOrderByEmail} = require("./order_controller");
const router=express.Router();


//create order
router.post("/",createOrder);

//get order by user email
router.get("/email/:email",getOrderByEmail);




module.exports=router;
const express = require("express");
const router = express.Router();
const CartModel = require("../model/Cart.model");

router.get("/", async (req,res) =>{
    try{
        const cart = await CartModel.find();
        res.status(200).json(cart);
    }catch(error){
        res.status(500).json({ message:error.message})
    }
});
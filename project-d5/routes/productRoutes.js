const express = require("express");
const router = express.Router();
const { allProducts, getProductForm, postProductForm } = require("../controllers/productController");
const Product = require("../model/product");

router.get("/product", allProducts );

router.get("/product/new", getProductForm );

router.post("/product/new", postProductForm);

router.get("/product/show/:id",async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("products/show",{product});
})

module.exports = router;

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
});

router.delete("/product/delete/:id",async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("/product");
});

router.get("/product/edit/:id",async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("products/edit",{product})
})

router.patch("/product/edit/:id",async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndUpdate(id,req.body);
    res.redirect(`/product/show/${id}`);
});



module.exports = router;

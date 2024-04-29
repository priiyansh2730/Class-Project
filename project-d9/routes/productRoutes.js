const express = require("express");
const router = express.Router();
const { allProducts, getProductForm, postProductForm } = require("../controllers/productController");
const Product = require("../model/product");
const isLoggedIn = require("../middleware");

router.get("/product", allProducts );

router.get("/product/new",isLoggedIn, getProductForm );

router.post("/product/new",isLoggedIn, postProductForm);

router.get("/product/show/:id",isLoggedIn,async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id).populate("reviews");
    res.render("products/show",{product});
});

router.delete("/product/delete/:id",isLoggedIn,async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    req.flash("success","Product deleted successfully");
    res.redirect("/product");
});

router.get("/product/edit/:id",isLoggedIn,async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("products/edit",{product})
})

router.patch("/product/edit/:id",isLoggedIn,async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndUpdate(id,req.body);
    req.flash("success","Product updated successfully");
    res.redirect(`/product/show/${id}`);
});



module.exports = router;

const express = require("express");
const router = express.Router();
const { allProducts, getProductForm, postProductForm } = require("../controllers/productController");
const Product = require("../model/product");
const {isLoggedIn, isSeller} = require("../middleware");
const User = require("../model/user");

router.get("/product", allProducts );

router.get("/product/new",isLoggedIn,isSeller, getProductForm );

router.post("/product/new",isLoggedIn,isSeller, postProductForm);

router.get("/product/show/:id",isLoggedIn,async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id).populate("reviews");
    res.render("products/show",{product});
});

router.delete("/product/delete/:id",isLoggedIn,isSeller,async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndDelete(id);
    req.flash("success","Product deleted successfully");
    res.redirect("/product");
});

router.get("/product/edit/:id",isLoggedIn,isSeller,async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);
    res.render("products/edit",{product})
})

router.patch("/product/edit/:id",isLoggedIn,isSeller,async (req,res)=>{
    const {id} = req.params;
    await Product.findByIdAndUpdate(id,req.body);
    req.flash("success","Product updated successfully");
    res.redirect(`/product/show/${id}`);
});

router.get("/product/myproduct",isLoggedIn,isSeller,async (req,res)=>{
    const user = await User.findById(req.user._id).populate("myProducts");
    const adminProducts = user.myProducts;
    console.log(adminProducts);
    res.render("products/adminProducts",{adminProducts});
})

module.exports = router;

const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const Review = require("../model/review");
const isLoggedIn = require("../middleware");


router.post("/product/review/:id",isLoggedIn,async (req,res)=>{
    const {id} = req.params;
    const product = await Product.findById(id);

    const {comment,rating} = req.body;
    const review = await Review.create({
        comment,
        rating
    });

    product.reviews.push(review);
    await product.save();
    req.flash("success","Review added");
    res.redirect(`/product/show/${id}`);
})

module.exports = router;

const express = require("express");
const Product = require("../model/product");
const User = require("../model/user");

const allProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.render("products/allProducts", { allProducts });
  } 

const getProductForm = (req, res) => {
    res.render("products/addProduct");
  }

const postProductForm = async (req, res) => {
  const user = await User.findById(req.user._id);
    const { productName, price, description, imageUrl } = req.body;
    const newProduct = await Product.create({
      productName,
      price,
      description,
      imageUrl,
      author:req.user._id,
    });
    newProduct.save();
    user.myProducts.push(newProduct);
    user.save();
    req.flash("success","Product created successfully");
    res.redirect("/product/new");
  }

module.exports = {allProducts,getProductForm,postProductForm};

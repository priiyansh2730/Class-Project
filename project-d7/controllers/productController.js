const express = require("express");
const Product = require("../model/product");

const allProducts = async (req, res) => {
    const allProducts = await Product.find();
    res.render("products/allProducts", { allProducts });
  } 

const getProductForm = (req, res) => {
    res.render("products/addProduct");
  }

const postProductForm = async (req, res) => {
    const { productName, price, description, imageUrl } = req.body;
    const newProduct = await Product.create({
      productName,
      price,
      description,
      imageUrl,
    });
    newProduct.save();
    req.flash("success","Product created successfully");
    res.redirect("/product/new");
  }

module.exports = {allProducts,getProductForm,postProductForm};

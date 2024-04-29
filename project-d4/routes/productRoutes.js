const express = require("express");
const router = express.Router();
const { allProducts, getProductForm, postProductForm } = require("../controllers/productController");

router.get("/product", allProducts );

router.get("/product/new", getProductForm );

router.post("/product/new", postProductForm);

module.exports = router;

const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const Product = require("./model/product");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// mongoose connection
mongoose.connect("mongodb://localhost:27017/sec-m").then(() => {
  console.log("db connected");
});

app.get("/product/new", (req, res) => {
  res.render("addProduct");
});

app.post("/product/new", async (req, res) => {
  const { productName, price, description, imageUrl } = req.body;
  const newProduct = await Product.create({
    productName,
    price,
    description,
    imageUrl,
  });
  newProduct.save();
  res.redirect("/product/new");
});

app.listen(PORT, () => console.log("http://localhot/" + PORT));

const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const productRoutes = require("./routes/productRoutes");

app.set("view engine", "ejs");
app.engine("ejs",ejsMate);
app.set("views", "views");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// mongoose connection
mongoose.connect("mongodb://localhost:27017/sec-m").then(() => {
  console.log("db connected");
});

app.use(productRoutes);

app.listen(PORT, () => console.log("http://localhot/" + PORT));

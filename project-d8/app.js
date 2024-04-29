const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const User = require("./model/user");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");

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
//session
const sessionConfig = {
  secret: 'ThisWillGoInENV',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 10000
  }
}
app.use(session(sessionConfig));
app.use(flash());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
})

app.use(productRoutes);
app.use(reviewRoutes);

app.listen(PORT, () => console.log("http://localhot/" + PORT));

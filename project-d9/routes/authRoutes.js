const expres = require("express");
const router = expres.Router();
const User = require("../model/user");
const passport = require("passport");

router.get("/signup",(req,res)=>{
    res.render("auth/signup");
});

router.post("/register",async (req,res)=>{
    const {email,username,password} = req.body;

    const user = new User({email,username});
    await User.register(user,password);

    res.redirect("/product");
})

router.get("/login",(req,res)=>{
    res.render("auth/login");
});

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    failureMessage:true,
    failureFlash:true
    }),(req, res) => {
        res.redirect('/product');
    }
);

router.post('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/login');
    });
  });

module.exports = router;
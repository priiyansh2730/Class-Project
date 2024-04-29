const passport = require("passport");

const isLoggedIn = (req,res,next)=>{

    if(req.xhr && !req.isAuthenticated()){
        req.flash("error","Login first to continue")
        return res.redirect("/login");
    }

    if(!req.isAuthenticated()){
        req.flash("error","Login first to continue")
        return res.redirect("/login");
    }
    next();
}

module.exports = isLoggedIn;
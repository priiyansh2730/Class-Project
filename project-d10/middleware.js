
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

const isSeller = (req,res,next)=>{
    if(req.user.role !== "seller"){
        req.flash("error","Permission not allowed");
        return res.redirect("/product");
    }
    next();
}

module.exports = {isLoggedIn,isSeller};
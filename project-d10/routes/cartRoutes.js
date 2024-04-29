const expres = require("express");
const router = expres.Router();
const User = require("../model/user");

router.post("/user/cart/:id",async(req,res)=>{
    const productId = req.params.id;
    const userId = req.user._id;

    const user = await User.findById(userId);

    const foundProduct = user.cart.find((obj)=> obj.productId == productId);

    if(foundProduct){
        foundProduct.count++;
    }else{
        user.cart.push({productId});
    }
    await user.save();
    res.redirect(`/product/show/${productId}`);
})

module.exports = router;
const mongoose = require("mongoose");
const passprtLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim :true
    }
});

userSchema.plugin(passprtLocalMongoose);

const User = mongoose.model("User",userSchema);
module.exports = User;


const mongoose = require("mongoose");
const passprtLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim :true
    },
    role:{
        type:String,
        default:"buyer"
    },
    myProducts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ],
    cart:[
        {
            _id:(false),
            productId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
            count:{
                type:Number,
                default:1
            }
        }
    ] 
});

userSchema.plugin(passprtLocalMongoose);

const User = mongoose.model("User",userSchema);
module.exports = User;


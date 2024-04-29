const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    comment:{
        type:String,
        trim:true
    },
    rating:{
        type:Number,
        required:true
    }
});

const Review = mongoose.model("Review",reviewSchema);
module.exports = Review;
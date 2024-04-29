const mongoose = require("mongoose");
// product schema
const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      min: 10,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
      trim: true,
    },
    // connection of review schema
    reviews:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Review"
      }
    ]
  },
  //wiil store created time
  { timestamps: true }
);
// collection creation
const Product = mongoose.model("Product", productSchema);
// export
module.exports = Product;

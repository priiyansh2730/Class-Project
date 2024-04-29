const mongoose = require("mongoose");
// product schema
const productSchema = mongoose.Schema(
  {
    name: {
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
    des: {
      type: Number,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  //wiil store created time
  { timestamps: true }
);
// collection creation
const Product = mongoose.model("Product", productSchema);
// export
module.exports = Product;

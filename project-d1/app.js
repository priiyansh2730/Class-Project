const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// mongoose connection
mongoose.connect("mongodb+srv://shubham21:shubham21@cluster0.k76tzvk.mongodb.net/product")
.then(()=>{
    console.log('db connected');
})

app.get("/", (req, res) => {	});

app.listen(PORT, () => console.log("http://localhot/" + PORT));
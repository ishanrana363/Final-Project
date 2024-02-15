const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const productDetailsSchema = new Schema({
    productName : {
        type : String,
    },
    brandName : {
        type : String,
    },
    categoryName : {
        type : String,
    },
    description : {
        type : String,
    },
    img : {
        type : String,
        },
},{timestamps:true,versionKey:false});


const productDetailsModel = model("productDetails",productDetailsSchema);


module.exports = productDetailsModel;
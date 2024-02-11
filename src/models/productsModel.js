const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const productsSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    shortDes : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    discount : {
        type : Boolean,
    },
    discountPrice : {
        type : String
    },
    image : {
        type : String,
        required : true
    },
    star : {
        type : String
    },
    stock : {
        type : String,
    },
    remark : {
        type:String,
        required : true
    },
    categoryID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    brandID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
},{timestamps:true,versionKey:false});


const productModel = model("products",productsSchema);


module.exports = productModel;
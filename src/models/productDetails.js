const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const productDetailsSchema = new Schema({
    img1 : {
        type : String,
        required : true
    },
    img2 : {
        type : String,
        required : true
    },
    img3 : {
        type : String,
        required : true
    },
    img4 : {
        type : Boolean,
    },
    img5 : {
        type : String
    },
    img6 : {
        type : String,
        required : true
    },
    img7 : {
        type : String
    },
    img8 : {
        type : String,
    },
    des : {
        type:String,
        required : true
    },
    color : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    },
    size : {
        type : String,
        required : true
    },
    productID : {
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
},{timestamps:true,versionKey:false});


const productDetailsModel = model("productDetails",productDetailsSchema);


module.exports = productDetailsModel;
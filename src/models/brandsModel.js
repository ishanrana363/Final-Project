const mongoose = require("mongoose");

const {Schema,model} = mongoose;

const brandSchema = new Schema({
    brndName : {
        type : String,
        required : true
    },
    brandImg : {
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false});


const brandModel = model("brands",brandSchema);

module.exports = brandModel;
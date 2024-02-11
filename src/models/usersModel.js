const mongoose = require("mongoose");

const {model,Schema} = mongoose;

const userSchema = new Schema({
    name : {
        type : String,
        required: true
    },email : {
        type : String,
        required : true,
        unique : true
    },mobile : {
        type: String,
        validate: {
            validator: function(v) {
                return /^(?:\+88|88)?(01[3-9]\d{8})$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
            },
            required: [true, 'User phone number required']
        },
    password : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    }
},{timestamps:true,versionKey:false});

const userModel = model("users",userSchema);

module.exports = userModel;

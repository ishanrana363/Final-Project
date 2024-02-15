const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true, // Ensure uniqueness of email addresses
        trim: true, // Remove whitespace from both ends of the email
        lowercase: true, // Convert email to lowercase
        validate: {
            validator: function(v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        },
        required: [true, 'User email address required']
    },
    mobile: {
        type: String,
        unique: true, // Ensure uniqueness of phone numbers
        trim: true, // Remove whitespace from both ends of the mobile number
        validate: {
            validator: function(v) {
                return /^(?:\+88|88)?(01[3-9]\d{8})$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
}, { timestamps: true, versionKey: false });

const userModel = model("User", userSchema);

module.exports = userModel;


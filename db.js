const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.DB_URL;

const connectDB = () =>{
    try {
        mongoose.connect(dbUrl);
        console.log(`--Db Is Connected--`);
    } catch (error) {
        console.log(`---DB Is Not Connected.---`);
    }
};


module.exports = connectDB;
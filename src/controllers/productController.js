const productDetails = require("../models/productDetails");


exports.createProduct = async (req,res) => {
    try{
        let id = req.headers["id"];
        let filter = { _id : id };
        let reqBody = req.body;
        let data = await productDetails(reqBody);
        console.log(data);

    }catch (e) {

    }
};
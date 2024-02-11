const userModel = require("../models/usersModel");

// registration

exports.registration = async (req,res)=>{
    try {
        let reqBody = req.body;
        const data = await userModel.create(reqBody);
        res.status(201).json({
            status:"success",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            status:"fail",
            msg:"something went worng"
        })
    }
}
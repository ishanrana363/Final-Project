const userModel = require("../models/usersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");


// registration

exports.registration = async (req,res)=>{
    try {
        let reqBody = req.body;
        let data = await userModel.create(reqBody);
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
};


// login

exports.login = async (req,res)=>{
    try{
        let email = req.body.email;
        let password = req.body.password;
        let data = await userModel.findOne({email:email,password: password});
        if (data){
            // create jwt token
            let payload = {
                exp : Math.floor(Date.now()/1000)+(60*60*24),
                email : data.email,
                id : data._id
            }
            let token = jwt.sign(payload,process.env.JWT_KEY);
            return res.status(201).json({
                status:"success",
                token : token,
                data : data
            })
        }else {
            return res.status(404).json({
                status:"fail",
                msg : "User not found!",
            })
        }
    }catch (e){
        return res.status(500).json({
            status:"fail",
            msg : "Something went worng!",
        })

    }
};

// update user

exports.updateUser = async (req,res)=>{
    try{
        let id = req.headers["id"];
        let filter = { _id : id };
        let name = req.body.name;
        let mobile = req.body.mobile;
        let img = req.body.img;
        let update = {
            name : name,
            mobile: mobile,
            img : img
        };
        let data = await userModel.findByIdAndUpdate(filter,update);
        res.status(200).json({
            status:"success",
            data : data,
        });
    }catch (e) {
        return res.status(500).json({
            status:"fail",
            msg : "Something went worng!",
        });
    }
};


exports.profileDetails = async (req,res)=>{
    try{
        let id = req.headers["id"];
        let filter = {_id:id};
        let data = await userModel.findOne(filter);
        res.status(200).json({
            status:"success",
            data : data
        });
    }catch (e) {
        return res.status(500).json({
            status:"fail",
            msg : "Something went worng!",
        });
    }
};

















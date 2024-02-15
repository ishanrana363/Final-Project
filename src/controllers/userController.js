const userModel = require("../models/usersModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const emailUtility = require("../utility/emailUtility");
const otpModel = require("../models/otpModel")
const {encodeToken} = require("../utility/tokenUtility");


// registration

exports.registration = async (req,res)=>{
    try {
        let email = req.body.email;
        let name = req.body.name;
        let mobile = req.body.mobile;
        let password = req.body.password;
        let img = req.body.img;
        let createData = {
            name : name,
            email : email,
            mobile : mobile,
            password : password,
            img : img,
        };


        let otpCode = Math.floor(100000 + Math.random() * 999999);
        let emailText = ` Your verification code is ${otpCode} `;
        let emailSub = ` Verification code `;

        let data = await userModel.create(createData);
        await emailUtility(email,emailText,emailSub);
        await otpModel.updateOne({ email: email }, { $set: { otp: otpCode } }, { upsert: true });
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


exports.emailOtpVerify = async(req, res) => {
    try {
        let email = req.params.email;
        let otp = req.params.otp;
        let statusCode = 1;
        let statusUpdate = 0;
        let otpStatus = 0;
        let filter = {
            otp: otp,
            email: email,
            status: statusCode
        };

        let data = await otpModel.findOne(filter);
        let userData = await userModel.findOne({email:email});

        if (data) {
            await otpModel.updateOne(filter, { $set: { status: statusUpdate, otp:otpStatus } });
            let token = encodeToken(email,userData._id.toString());
            return res.status(200).json({
                status: "success",
                msg: "Otp verification successfully",
                token: token,
                data : userData
            });
        }
        res.status(404).json({
            status: "fail",
            msg: "Invalid OTP or email"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "fail",
            msg: "Something went wrong!"
        });
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














// let token = encodeToken(email, user._id.toString());


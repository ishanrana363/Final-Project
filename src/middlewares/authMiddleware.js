require("dotenv").config();
const key = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");
module.exports=(req,res,next)=>{
    let token = req.headers["token"];
    jwt.verify(token,key,(error,decode)=>{
        if (error){
            return res.status(404).send({
                status:"fail",
                msg : "Unauthorized"
            })
        }else {
            let email = decode["email"];
            console.log(`decode email is :::::${email}`);
            req.headers.email = email;
            let id = decode["user_id"];
            console.log(`decode id is :::::: ${id} `);
            req.headers.user_id = id;
            next();
        }
    })

};
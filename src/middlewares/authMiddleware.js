require("dotenv").config();
const key = process.env.JWT_KEY;
const jwt = require("jsonwebtoken");
module.exports=(req,res,next)=>{
    let token = req.headers["token"];
    jwt.verify(token,key,(error,decode)=>{
        if (error){
            return res.status(401).send({
                status : "fail",
                msg : "Unauthorized"
            })
        }else {
            let email = decode["email"];
            req.headers.email = email;
            let id = decode["id"];
            req.headers.id = id;
            next()
        }
    })
}
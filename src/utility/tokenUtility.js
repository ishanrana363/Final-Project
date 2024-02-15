const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.encodeToken = (email, user_id) => {
    let payload = {
        email : email,
        user_id : user_id
    };

    let secretKey = process.env.JWT_KEY;

    return jwt.sign(payload, secretKey);
};


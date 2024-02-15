const nodemailer = require('nodemailer');
let smtpTransport = require("nodemailer-smtp-transport");
require("dotenv").config();
const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {
    let transporter = nodemailer.createTransport(
        smtpTransport ({
                service: "Gmail",
                auth: {
                    user: "ishanrana094@gmail.com",
                    pass: process.env.SMTP_KEY
                },
            }
        )
    );
    let mailOptions = {
        from: 'ishanrana094@gmail.com',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility;
require('dotenv').config()

const nodemailer = require('nodemailer')

module.exports = {
    sendMail: async function(subject, text){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.GMAIL_USER,
              pass: process.env.GMAIL_PASSWORD
            }
          });
          
          var mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'dikamjitborah09@gmail.com',
            subject,
            text
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
    }
}
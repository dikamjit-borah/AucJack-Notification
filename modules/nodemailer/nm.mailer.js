const nodemailer = require('nodemailer')

module.exports = {
    sendMail: async function(subject, text){
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: '',
              pass: ''
            }
          });
          
          var mailOptions = {
            from: 'joyceryder1234@gmail.com',
            to: 'xfgeboajuwwhoqilma@nvhrw.com',
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
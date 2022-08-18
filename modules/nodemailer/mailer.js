const nodemailer = require('nodemailer')

module.exports = {
    sendMail: function(){
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
            subject: 'Sending Email using Node.js',
            text: 'That was easy!'
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
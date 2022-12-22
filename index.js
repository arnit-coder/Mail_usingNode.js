var nodemailer = require('nodemailer');
const dotenv = require('dotenv').config()


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arnit2004@gmail.com',
    pass: process.env.password
  }
});

var mailOptions = {
  from: 'arnit2004@gmail.com',
  to: '21ucs029@lnmiit.ac.in',
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
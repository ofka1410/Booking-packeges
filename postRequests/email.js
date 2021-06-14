var nodemailer = require('nodemailer');
const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
   host:"localhost",
    //host: "127.0.0.1:3306",
    dialect:'mysql'
})

async function emailSend(User,data,email){
 
    const user= await User.findOne({where:{email:email}})
  
    if(user){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ofekme19@gmail.com',
        pass: 'ofekofek14'
      }
    });
    
  var mailOptions = {
  from: 'ofekme19@gmail.com',
  to: email,
  subject: `hello ${data.username}`,
  text: user.password.toString(), 
  };
  
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error)
    console.log('mail dosent working');
  } else {
    console.log('Email sent: ' + info.response);
  
  }
  });
  return 'your password has been sending to your email'
  }
  else{
    return 'CANT FIND YOUR EMAIL (email not exist ,or not valid)'
  }
  
  }
  module.exports.emailSend=emailSend
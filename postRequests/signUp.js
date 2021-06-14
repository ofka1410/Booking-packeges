const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
    host:"localhost",
    //host: "127.0.0.1:3306",
    dialect:'mysql'
})


async function  signup(User,data){
    const usernames= await User.findOne({where:{username:data.username}})
    const passwords= await User.findOne({where:{password:data.password}})
      
      if(usernames|| passwords){
              return 'USERNAME OR PASSWORD HAS ALREADY EXIST';
        }
       else{
          await sequelize.sync();
            const users = await User.create({
              username: data.username,
              password: data.password,
              email: data.email 
            });
            console.log(users.toJSON());
          
            return  `hello ${data.username}`
        }
  }
  module.exports.signup=signup
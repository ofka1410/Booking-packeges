const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
    host:"localhost",
     //host: "127.0.0.1:3306",
     dialect:'mysql'
})


class User extends Model {}
User.init({
 
  username: Sequelize.STRING,
 name: Sequelize.STRING,
 LastName: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING
},{ sequelize, modelName: 'users', freezeTableName: true});
module.exports.User=User


const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
       host:"localhost",
       //host: "127.0.0.1:3306",
       dialect:'mysql'
})


const User =require('./userModule')
const Vacations =require('./Vacations')

class Follow extends Model {}
Follow.init({

  user_id:{
    type:Sequelize.INTEGER,
    references:{
      model:User,
      key:'id'
    }
  },
  vacation_id:{
    type:Sequelize.INTEGER,
    references:{
      model:Vacations,
      key:'id'
    }
  }
},
{ sequelize, modelName: 'follows',freezeTableName: true});
User.User.hasMany(Follow,{foreignKey: "user_id"})
Follow.belongsTo(User.User,{foreignKey:"user_id"})
Vacations.Vacations.hasMany(Follow,{foreignKey: "vacation_id"})
Follow.belongsTo(Vacations.Vacations,{foreignKey:"vacation_id"})

module.exports.Follow=Follow

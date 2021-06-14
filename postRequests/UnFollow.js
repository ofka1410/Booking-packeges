const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
    host:"localhost",
    //host: "127.0.0.1:3306",
    dialect:'mysql'
})

async function UnFollow(data,Vacations,User,Follow){
  const user= await User.findOne({where:{username:data.username}})
  const Vacation= await Vacations.findOne({where:{description:data.description}})
  if(user && Vacation){
      console.log(Vacation.id)
  const follow= await Follow.findOne({where:{vacation_id:Vacation.id,user_id:user.id}})
    follow.destroy({where:{vacation_id:Vacation.id,user_id: user.id}})
    console.log("Deleted")
  }
  else{
    return 'not exist'
  } 
  }
 
module.exports.UnFollow=UnFollow
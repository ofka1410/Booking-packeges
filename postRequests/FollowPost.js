const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
     host:"localhost",
     //host: "127.0.0.1:3306",
     dialect:'mysql'
})


async function followVacation(data,Vacations,User,Follow){
    const user= await User.findOne({where:{username:data.username}})
    const Vacation= await Vacations.findOne({where:{description:data.description}})
    if(user && Vacation){
        
      await sequelize.sync();
      const follow = await Follow.create({
          user_id: user.id,
          vacation_id:Vacation.id, 
      });
      return 'success'
    }
    else{
        return 'not success'
    }
    
     
  }
  
  module.exports.followVacation=followVacation
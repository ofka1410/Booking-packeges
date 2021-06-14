const { Sequelize, Model, DataTypes,Op} = require('sequelize')

const sequelize = new Sequelize ('vacation_project',"root","",{
    host:"localhost",
    dialect:'mysql'
})
async function follows(data,Vacations,User,Follow){
 let followers=[]
 let followsId=[]
 let notFollow=[]
    const user= await User.findOne({where:{username:data}})
    const follows_Found= await Follow.findAll({where:{user_id: user.id},include:[{model:Vacations}]})
    if(follows_Found){
follows_Found.forEach(element => {
  followsId.push(element.vacation_id)
});

notFollow=await Vacations.findAll({
  where:{id:{[Op.notIn]:followsId}}
})
const obj={
  Follows:follows_Found,
  notFollow:notFollow
}
return obj;

    }
else{
  notFollow= await Vacations.findAll()
  const obj={
    Follows:followers,
    notFollow:notFollow
  }
  return obj;
}
    
}

module.exports.follows=follows

 
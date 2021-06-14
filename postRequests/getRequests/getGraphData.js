const { Sequelize, Model, DataTypes} = require('sequelize')

const sequelize = new Sequelize ('vacation_project',"root","",{
    host:"localhost",
    dialect:'mysql'
})
async function graph(Follow,Vacations){
    let followers_length=[]
   let followersNames=[]
    const vacations = await Vacations.findAll()
    for(let i=0;i<vacations.length;i++){
        followersNames.push(vacations[i].name)
        const vacation= await Follow.findAll({where:{vacation_id:vacations[i].id}})
        followers_length.push(vacation.length.toString())
    }
console.log(followers_length)
const obj={
    followers_length:followers_length,
    followersNames:followersNames 
}
         return obj;
}

module.exports.graph=graph
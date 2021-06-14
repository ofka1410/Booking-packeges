const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
    host:"localhost",
   // host: "127.0.0.1:3306",
    dialect:'mysql'
})

async function edit(data,Vacations){

    const item = await Vacations.findOne({
        where:{
            description: data.CurrentDescription
        }
     }); 
     if(data.description!==undefined){
        item.description=data.description
     }
    
     if(data.price!==undefined){
        item.price=data.price 
     }
     if(data.checkIn!==undefined){
        item.checkIn=data.checkIn 
     }
     if(data.checkOut!==undefined){
        item.checkOut=data.checkOut
     }
     if(data.img !==undefined){
        item.img=data.img
     }


 item.save({fields: ['description','price','checkIn','checkOut','img']}); 
 return data.CurrentDescription;
}


 

module.exports.edit=edit
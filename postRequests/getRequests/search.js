const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
    host:"localhost",
    dialect:'mysql'
})


async function search(Follow,Vacations,User,data){
    console.log(data)
    let vacation=[]
    let obj={}
if(data.price!=='' && data.country !=='' && data.date !==''){
    let vacations = await Vacations.findOne({where:{price:data.price,name:data.country,checkIn:data.date}})
    vacation.push(vacations)
    if(vacation){
    obj={
    status:'success',
    array:vacation
     }
    }
    else{
        obj={
            status:'cant find vacations in this price/countrry/date',
            array:[]
        }  
    }
}
else if(data.price!=='' && data.country!==''){
     vacation = await Vacations.findAll({where:{price:data.price,name:data.country}})

    if(vacation){
        obj={
        status:'success',
        array:vacation
         }
}
else{
    obj={
        status:'cant find vacations in this price/countrry/date',
        array:[]
    }
      
}
}
else if(data.country!=='' && data.date!==''){
   let vacations = await Vacations.findAll({where:{name:data.country,checkIn:data.date}})

    if(vacations){
        obj={
        status:'success',
        array:vacations
         }
}
else{
    obj={
        status:'cant find vacations in this price/countrry/date',
        array:[]
    }
      
}
}
else if(data.date!=='' && data.price !==''){
    vacation = await Vacations.findAll({where:{checkIn:data.date,price:data.price}})
    
    if(vacation.length>0){
        obj={
        status:'success',
        array:vacation
         }
}
else{
    obj={
        status:'cant find vacations in this price/countrry/date',
        array:[]
    }    
}
}
else if(data.date!==''){
    let vacations = await Vacations.findAll({where:{checkIn:data.date}})
    for(let i=0;i<vacations.length;i++){
        vacation.push(vacations[i])
    }
     if(vacation.length>0){
        obj={
        status:'success',
        array:vacation
         }
}
else{
    obj={
        status:'cant find vacations in this price/countrry/date',
        array:[]
    }    
}
}
else if(data.price!==''){
let vacations = await Vacations.findAll({where:{price:data.price}})
for(let i=0;i<vacations.length;i++){
    vacation.push(vacations[i])
}
   
    if(vacation.length>0){
       obj={
       status:'success',
       array:vacation
        }
}
else{
   obj={
       status:'cant find vacations in this price/countrry/date',
       array:[]
   }    
}
}
else if(data.country!==''){
    let vacations = await Vacations.findAll({where:{name:data.country}})
    for(let i=0;i<vacations.length;i++){
        vacation.push(vacations[i])
    }
    if(vacation.length>=1){
       obj={
       status:'success',
       array:vacation
        }
}
else{
   obj={
       status:'cant find vacations in this price/countrry/date',
       array:[]
   }    
}
}

console.log(obj)
return obj;
}
module.exports.search=search
const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
    host:"localhost",
    //host: "127.0.0.1:3306",
     dialect:'mysql'
})


async function AddVacation(data,Vacations){
    
    if(data.img !==null && data.description!==null &&
         data.price!==null  && data.checkIn!==null && data.checkOut!==null){
            await sequelize.sync();
            const vacations = await Vacations.create({
                description: data.description,
                price: data.price,
                img: data.img,
                checkIn: data.checkIn,
                checkOut: data.checkOut,
                name:data.name
                
              });
              return 'vacation add succecfuly'
         }
         else{
             return 'some of the fields in null'
         }
         
}

module.exports.AddVacation=AddVacation
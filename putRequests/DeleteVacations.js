const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
     host:"localhost",
     //host: "127.0.0.1:3306",
     dialect:'mysql'
})


async function dellete(data,Vacations){
    await sequelize.sync();
    Vacations.destroy({
        where: {
            description:data.description
        }
    })
return 'success'
}

module.exports.dellete=dellete
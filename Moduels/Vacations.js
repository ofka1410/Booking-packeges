const { Sequelize, Model, DataTypes} = require('sequelize')
const sequelize = new Sequelize ('vacation_project',"root","",{
    host:"localhost",
   // host: "127.0.0.1:3306",
    dialect:'mysql'
})


class Vacations extends Model {}
Vacations.init({

    description: Sequelize.STRING,
    price: Sequelize.STRING,
    img: Sequelize.STRING,
    checkIn: Sequelize.STRING,
    checkOut: Sequelize.STRING,
    name: Sequelize.STRING,
},{ sequelize, modelName: 'vacations',freezeTableName: true});
module.exports.Vacations=Vacations
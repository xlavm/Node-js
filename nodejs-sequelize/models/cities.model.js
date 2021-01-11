const Sequelize = require('sequelize') //para usar el modelo del user
var db = require('../config/db.config')

var citiesSchema = ({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
})

module.exports = db.sequelize.define('cities', citiesSchema)


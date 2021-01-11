const Sequelize = require('sequelize')
var db = require('../config/db.config')

var userSchema = ({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    user: {
        type: Sequelize.STRING
    },
    pass: {
        type: Sequelize.STRING
    }
})

module.exports = db.sequelize.define('user', userSchema)

const Sequelize = require('sequelize')
const db = {}
const sequelize_connect = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        max: 5, //max number connections
        min: 0, //min number connections
        acquire: 30000, //time inactivity in miliseconds for freedom connection
        idle: 10000
    }
})

db.sequelize = sequelize_connect
db.Sequelize = Sequelize

module.exports = db
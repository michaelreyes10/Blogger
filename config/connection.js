//import sequelize constructor from library
const Sequelize = require('sequelize');

require('dotenv').config();

//creat db connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.PASS,{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

  module.exports = sequelize;


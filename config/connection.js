// import Sequelize constructor
const Sequelize = require('sequelize');

// create connection to database
const sequelize = new Sequelize('just_tech_news_db', 'root', 'root1234', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
}); 

module.exports = sequelize;

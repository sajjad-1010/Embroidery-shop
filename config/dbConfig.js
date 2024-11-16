const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false, 
});

module.exports = sequelize;

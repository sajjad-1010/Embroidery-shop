const sequelize = require('../config/dbConfig');
const Product = require('./product');

const db = {
  sequelize,
  Product,
};

module.exports = db;

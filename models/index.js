// models/index.js
const sequelize = require('../config/database');
const Product = require('./product');

const db = {
  sequelize,
  Product,
};

module.exports = db;

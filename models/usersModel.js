const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig'); // Adjust path to your DB config

class User extends Model {}

User.init(
    {
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, defaultValue: 'user' }, // Example: user/admin roles
    },
    { sequelize, modelName: 'User' }
);

module.exports = User;

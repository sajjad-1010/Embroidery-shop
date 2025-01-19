const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    isFirstComment: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    clothesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Comments',
    tableName: 'comments',
  }
);

module.exports = Comments;
  
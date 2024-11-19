const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Comments = sequelize.define('Comments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
    allowNull: true, // Null if it's the first comment
  },
  clothesId: {
    type: DataTypes.INTEGER,
    allowNull: false, // Every comment belongs to a clothing item
  },
}, {
  tableName: 'comments',
  timestamps: true,
});

// Self-association for replies
Comments.hasMany(Comments, {
  foreignKey: 'parentId',
  as: 'replies',
});
Comments.belongsTo(Comments, {
  foreignKey: 'parentId',
  as: 'parent',
});

module.exports = Comments;

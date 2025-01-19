const sequelize = require('../config/dbConfig');
const User = require('./usersModel');
const Comments = require('./commentsModel');
const Clothes = require('./clothesModel');

// Associations
Clothes.hasMany(Comments, { foreignKey: 'clothesId', onDelete: 'CASCADE', as: 'comments' });
Comments.belongsTo(Clothes, { foreignKey: 'clothesId', as: 'clothes' });

Comments.hasMany(Comments, { foreignKey: 'parentId', as: 'replies' });
Comments.belongsTo(Comments, { foreignKey: 'parentId', as: 'parent' });

User.hasMany(Comments, { foreignKey: 'userId', as: 'comments' });
Comments.belongsTo(User, { foreignKey: 'userId', as: 'author' });

module.exports = {
  sequelize,
  User,
  Comments,
  Clothes,
};

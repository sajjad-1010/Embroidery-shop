const Clothes = require('./clothesModel');
const Comment = require('./commentsModel');
const User = require('./usersModel');

// Relationships
Clothes.hasMany(Comment, { foreignKey: 'clothesId', onDelete: 'CASCADE' });
Comment.belongsTo(Clothes, { foreignKey: 'clothesId' });

Comment.hasMany(Comment, { foreignKey: 'parentCommentId', as: 'replies' });
Comment.belongsTo(Comment, { foreignKey: 'parentCommentId', as: 'parentComment' });

// Add the relationship between Comment and User
User.hasMany(Comment, { foreignKey: 'userId', onDelete: 'CASCADE' }); // A user can write many comments
Comment.belongsTo(User, { foreignKey: 'userId', as: 'author' }); // Each comment is written by one user

module.exports = {
  Clothes,
  Comment,
  User,
};

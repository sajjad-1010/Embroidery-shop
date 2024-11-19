const Clothes = require('./clothes.model');
const Comment = require('./Comment');

// Relationships
Clothes.hasMany(Comment, { foreignKey: 'clothesId', onDelete: 'CASCADE' });
Comment.belongsTo(Clothes, { foreignKey: 'clothesId' });

Comment.hasMany(Comment, { foreignKey: 'parentCommentId', as: 'replies' });
Comment.belongsTo(Comment, { foreignKey: 'parentCommentId', as: 'parentComment' });

module.exports = {
  Clothes,
  Comment,
};

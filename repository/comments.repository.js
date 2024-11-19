const Comments = require('../models/comments.model');

class CommentsRepository {
  async createComment(data) {
    return await Comments.create(data);
  }

  async getAllCommentsByClothesId(clothesId) {
    return await Comments.findAll({
      where: { clothesId },
      include: {
        model: Comments,
        as: 'replies', // Include replies for each comment
      },
    });
  }

  async getCommentById(id) {
    return await Comments.findByPk(id, {
      include: [
        { model: Comments, as: 'replies' }, // Include replies
        { model: require('../models/clothes.model'), as: 'clothes' }, // Include associated clothes
      ],
    });
  }

  async updateComment(id, data) {
    return await Comments.update(data, { where: { id } });
  }

  async deleteComment(id) {
    return await Comments.destroy({ where: { id } });
  }
}

module.exports = new CommentsRepository();

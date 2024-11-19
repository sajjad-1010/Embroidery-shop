const CommentsRepository = require('../repository/comments.repository');

class CommentsService {
  async createComment(data) {
    const { isFirstComment, parentId, clothesId } = data;

    if (!clothesId) {
      throw new Error('Every comment must belong to a clothing item.');
    }

    if (!isFirstComment && !parentId) {
      throw new Error('Replies must have a parentId.');
    }

    return await CommentsRepository.createComment(data);
  }

  async getAllCommentsByClothesId(clothesId) {
    return await CommentsRepository.getAllCommentsByClothesId(clothesId);
  }

  async getCommentById(id) {
    const comment = await CommentsRepository.getCommentById(id);
    if (!comment) {
      throw new Error(`Comment with ID ${id} not found`);
    }
    return comment;
  }

  async updateComment(id, data) {
    const updated = await CommentsRepository.updateComment(id, data);
    if (!updated[0]) {
      throw new Error(`Comment with ID ${id} not found`);
    }
    return `Comment with ID ${id} updated successfully`;
  }

  async deleteComment(id) {
    const deleted = await CommentsRepository.deleteComment(id);
    if (!deleted) {
      throw new Error(`Comment with ID ${id} not found`);
    }
    return `Comment with ID ${id} deleted successfully`;
  }
}

module.exports = new CommentsService();

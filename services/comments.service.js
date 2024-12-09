const CommentsRepository = require('../repository/commentsRepository');

class CommentsService {
  async createComment(data) {
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

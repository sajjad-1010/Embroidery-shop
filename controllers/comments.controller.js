const CommentsService = require('../services/comments.service');

class CommentsController {
  async createComment(req, res) {
    try {
      const newComment = await CommentsService.createComment(req.body);
      res.status(201).json(newComment);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAllCommentsByClothesId(req, res) {
    try {
      const comments = await CommentsService.getAllCommentsByClothesId(req.params.clothesId);
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getCommentById(req, res) {
    try {
      const comment = await CommentsService.getCommentById(req.params.id);
      res.status(200).json(comment);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new CommentsController();

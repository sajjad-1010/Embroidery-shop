const Comments = require('../models/comments.model');

class CommentsController {

  static async createComment(req, res) {
    try {
      const { text, isFirstComment, parentCommentId, clothesId } = req.body;

      if (!text || text.trim() === '') {
        return res.status(400).json({ message: 'Comment text cannot be empty.' });
      }

      const newComment = await Comment.create({ text, isFirstComment, parentCommentId, clothesId });
      res.status(201).json({ message: 'Comment created successfully.', comment: newComment });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create comment.', error: error.message });
    }
  }

  static async getAllCommentsByClothesId(req, res) {
    try {
        const { clothesId } = req.params;
        const comments = await Comment.findAll({ where: { clothesId } });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch comments.', error: error.message });
    }
}


  static async getCommentById(req, res) {
    try {
      const { id } = req.params;
      const comment = await Comment.findByPk(id);

      if (!comment) {
        return res.status(404).json({ message: 'Comment not found.' });
      }

      res.status(200).json(comment);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch comment.', error: error.message });
    }
  }

  static async updateCommentText(req, res) {
    try {
      const { id } = req.params;
      const { text } = req.body;

      if (!text || text.trim() === '') {
        return res.status(400).json({ message: 'Comment text cannot be empty.' });
      }

      const comment = await Comment.findByPk(id);

      if (!comment) {
        return res.status(404).json({ message: 'Comment not found.' });
      }

      comment.text = text;
      await comment.save();

      res.status(200).json({ message: 'Comment updated successfully.', comment });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update comment.', error: error.message });
    }
  }

  static async deleteComment(req, res) {
    try {
      const { id } = req.params;

      const comment = await Comment.findByPk(id);

      if (!comment) {
        return res.status(404).json({ message: 'Comment not found.' });
      }

      await comment.destroy();
      res.status(200).json({ message: 'Comment deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete comment.', error: error.message });
    }
  }
}

module.exports = CommentsController;

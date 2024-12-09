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

  updateCommentText = async (req, res) => {
    try {
      const { id } = req.params; // Get the comment ID from the URL
      const { text } = req.body; // Get the new text from the request body
  
      if (!text || text.trim() === '') {
        return res.status(400).json({ message: 'Comment text cannot be empty.' });
      }
  
      const comment = await Comment.findByPk(id);
  
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found.' });
      }
  
      // Update the text field only
      comment.text = text;
      await comment.save();
  
      return res.status(200).json({ message: 'Comment updated successfully.', comment });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating comment.', error: error.message });
    }
  }

  async deleteComment(req, res) {
    try {
      const message = await ClothesService.deleteComment(req.params.id);
      res.status(200).json({ message });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new CommentsController();

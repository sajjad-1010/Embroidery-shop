const express = require('express');
const CommentsController = require('../controllers/comments.controller');

const router = express.Router();

router.post('/', CommentsController.createComment); // Create a new comment or reply
router.get('/:clothesId', CommentsController.getAllCommentsByClothesId); // Get all comments for a clothing item
router.get('/details/:id', CommentsController.getCommentById); // Get a specific comment by ID

module.exports = router;

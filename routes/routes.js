const express = require('express');
const ClothesController = require('../controllers/clothes.controller');
const CommentsController = require('../controllers/comments.controller');

const router = express.Router();
const API_PREFIX = '/api'; 

// Clothes Routes
router.post(`${API_PREFIX}/clothes`, ClothesController.createClothes); // Create clothes
router.get(`${API_PREFIX}/clothes`, ClothesController.getAllClothes); // Get all clothes
router.get(`${API_PREFIX}/clothes/:id`, ClothesController.getClothesById); // Get clothes by ID
router.put(`${API_PREFIX}/clothes/:id`, ClothesController.updateClothes); // Update clothes by ID
router.delete(`${API_PREFIX}/clothes/:id`, ClothesController.deleteClothes); // Delete clothes by ID

// Comments Routes
router.post(`${API_PREFIX}/comments`, CommentsController.createComment); // Create a new comment or reply
router.get(`${API_PREFIX}/comments/:clothesId`, CommentsController.getAllCommentsByClothesId); // Get all comments for a specific clothes item
router.get(`${API_PREFIX}/comments/:id`, CommentsController.getCommentById); // Get a specific comment by ID

module.exports = router;

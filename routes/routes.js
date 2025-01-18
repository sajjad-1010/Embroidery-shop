const express = require('express');
const ClothesController = require('../controllers/clothesController');
const CommentsController = require('../controllers/commentsController');
const UserController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const API_PREFIX = '/api'; 

const JWT_SECRET = 'your_secret_key_here';

// Clothes Routes
router.post(`${API_PREFIX}/clothes`, ClothesController.createClothes); // Create clothes
router.get(`${API_PREFIX}/clothes`, ClothesController.getAllClothes); // Get all clothes
router.get(`${API_PREFIX}/clothes/:id`, ClothesController.getClothesById); // Get clothes by ID
router.put(`${API_PREFIX}/clothes/:id`, ClothesController.updateClothes); // Update clothes by ID
router.delete(`${API_PREFIX}/clothes/:id`, ClothesController.deleteClothes); // Delete clothes by ID

// Comments Routes
router.post(`${API_PREFIX}/comments`, CommentsController.createComment); // Create a new comment or reply
router.get(`${API_PREFIX}/comments/cloth/:clothesId`, CommentsController.getAllCommentsByClothesId); // Get all comments for a specific clothes item
router.get(`${API_PREFIX}/comments/:id`, CommentsController.getCommentById); // Get a specific comment by ID
router.delete(`${API_PREFIX}/comments/:id`, CommentsController.deleteComment); // Delete comment by ID
router.put(`${API_PREFIX}/comments/:id`, CommentsController.updateCommentText);

// Register
router.post(`${API_PREFIX}/register`, UserController.register); // Register a new user
router.post(`${API_PREFIX}/login`, UserController.login); // Authenticate a user
router.get(`${API_PREFIX}/profile/:id`, UserController.getProfile); // Get a user's profile
router.put(`${API_PREFIX}/profile/:id`, UserController.updateProfile); // Update a user's profile
router.delete(`${API_PREFIX}/profile/:id`, UserController.deleteProfile); // Update a user's profile
router.get(`${API_PREFIX}/profile/`, UserController.findAllProfile); // Update a user's profile

// Example: Protected route
// router.get('/protected', authMiddleware, (req, res) => {
//     res.status(200).json({ message: 'This is a protected route', userId: req.userId });
// });


module.exports = router;

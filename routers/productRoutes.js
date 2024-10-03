// routes/productRoutes.js
const express = require('express');
const { getProducts, createProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/products', getProducts);
router.post('/products', createProduct);

module.exports = router;

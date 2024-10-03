// controllers/productController.js
const db = require('../models');

exports.getProducts = async (req, res) => {
  try {
    const products = await db.Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' });
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, price, stock } = req.body;
  try {
    const product = await db.Product.create({ name, description, price, stock });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

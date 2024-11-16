// app.js
const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', async (req, res) => {
  try {
    await sequelize.authenticate(); 
    res.status(200).json({ status: 'UP' });
  } catch (error) {
    res.status(500).json({ status: 'DOWN', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

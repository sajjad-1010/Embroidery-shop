const express = require("express");
const sequelize = require("./config/dbConfig");
require("dotenv").config();
const routes = require("./routes/routes");
// const authRoutes = require('./routes/authRoutes');
require('./models/syncDatabase');


const app = express();
const PORT = process.env.PORT || 3000;

// health check for database
app.get('/health', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).json({ status: 'UP', message: 'Database connected' });
  } catch (error) {
    res.status(500).json({ status: 'DOWN', error: error.message });
  }
});

(async () => {
  try {
    const { sequelize } = require('./models');
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    await sequelize.sync({ force: true }); // Recreate tables for testing
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Error:', error);
  }
})();



// app.use('/auth', authRoutes);
app.use(express.json()); // Parse JSON request bodies
app.use(routes);
const express = require("express");
const sequelize = require("./config/dbConfig");
require("dotenv").config();
const routes = require("./routes/routes");
// require('./models/syncDatabase');

const app = express();
const PORT = process.env.PORT || 3000;

// health check for database
// app.get('/health', async (req, res) => {
//   try {
//     await sequelize.authenticate();
//     res.status(200).json({ status: 'UP', message: 'Database connected' });
//   } catch (error) {
//     res.status(500).json({ status: 'DOWN', error: error.message });
//   }
// });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

// sequelize.sync({ alter: true }) // Automatically adjusts the schema
//   .then(() => console.log('Database synchronized'))
//   .catch((err) => console.error('Error synchronizing database:', err));


app.use(express.json()); // Parse JSON request bodies
app.use(routes);
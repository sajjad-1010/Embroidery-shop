const express = require("express");
const sequelize = require("./config/dbConfig");
require("dotenv").config();
// require('./models/syncDatabase');
const clothesRoutes = require("./routes/clothes.routes");
const commentsRoutes = require("./routes/comments.routes");

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

app.use(express.json()); // Parse JSON request bodies

app.use("/api/clothes", clothesRoutes);
app.use("/api/comments", commentsRoutes);

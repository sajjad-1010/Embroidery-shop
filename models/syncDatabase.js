const sequelize = require('../config/dbConfig'); 
// const { Clothes , Comment } = require('../models'); 

(async () => {
  if (process.env.SYNC_DB === 'true') {
    try {
      await sequelize.sync({ force: true }); 
      console.log('Database synced successfully!');
    } catch (err) {
      console.error('Error syncing the database:', err);
    }
  } else {
    console.log('Skipping database sync. SYNC_DB is not set to true.');
  }
})();

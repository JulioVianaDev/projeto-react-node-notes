const express = require('express');
const sequelize = require('./config/database')
const NotesRoutes = require('./routes/notesRoutes')
const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/notes',NotesRoutes)

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
const express = require('express');
const sequelize = require('./database');
const router = require('./router');

const app = express();
const PORT = process.env.SERVER_PORT || 4000;

sequelize
  .authenticate()
  .then(() => console.log('Database connection established'))
  .catch((err) => console.log('Database connection failed', err));

app.get('/api', (req, res) => res.send('INDEX'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

app.listen(PORT, console.log(`Server running on port ${PORT}`));

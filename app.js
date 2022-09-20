const express = require('express');
const sequelize = require('./config/database');

const app = express();
const PORT = process.env.SERVER_PORT || 4000;

sequelize
  .authenticate()
  .then(() => console.log('Database connection established'))
  .catch((err) => console.log('Database connection failed', err));

app.get('/api', (req, res) => res.send('INDEX'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Defining api routes
app.use('/api/auth', require('./routes/refresh_tokens'));
app.use('/api/users', require('./routes/users'));
app.use('/api/cityLocations', require('./routes/city_locations'));
app.use('/api/trips', require('./routes/trips'));
app.use('/api/tripLocations', require('./routes/trip_locations'));
app.use('/api/locations', require('./routes/locations'));
app.use('/api/favorites', require('./routes/favorites'));

app.listen(PORT, console.log(`Server running on port ${PORT}`));

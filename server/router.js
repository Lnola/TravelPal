const router = require('express').Router();

router.use('/api/auth', require('./routes/refresh_tokens'));
router.use('/api/users', require('./routes/users'));
router.use('/api/cityLocations', require('./routes/city_locations'));
router.use('/api/trips', require('./routes/trips'));
router.use('/api/tripLocations', require('./routes/trip_locations'));
router.use('/api/locations', require('./routes/locations'));
router.use('/api/favorites', require('./routes/favorites'));

module.exports = router;

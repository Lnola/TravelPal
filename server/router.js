const router = require('express').Router();

router.use('/auth', require('./routes/refresh_tokens'));
router.use('/users', require('./routes/users'));
router.use('/cityLocations', require('./routes/city_locations'));
router.use('/trips', require('./routes/trips'));
router.use('/tripLocations', require('./routes/trip_locations'));
router.use('/locations', require('./routes/locations'));
router.use('/favorites', require('./routes/favorites'));

module.exports = router;

const router = require('express').Router();

const auth = require('./routes/auth');
const cityLocations = require('./routes/cityLocations');
const favorites = require('./routes/favorites');
const locations = require('./routes/locations');
const tripLocations = require('./routes/tripLocations');
const trips = require('./routes/trips');
const users = require('./routes/users');

router.use(auth.path, auth.router);
router.use(cityLocations.path, cityLocations.router);
router.use(favorites.path, favorites.router);
router.use(locations.path, locations.router);
router.use(tripLocations.path, tripLocations.router);
router.use(trips.path, trips.router);
router.use(users.path, users.router);

module.exports = router;

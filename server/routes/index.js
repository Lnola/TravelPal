const router = require('express').Router();

const auth = require('./auth');
const cityLocations = require('./cityLocations');
const favorites = require('./favorites');
const locations = require('./locations');
const tripLocations = require('./tripLocations');
const trips = require('./trips');
const users = require('./users');

router.use(auth.path, auth.router);
router.use(cityLocations.path, cityLocations.router);
router.use(favorites.path, favorites.router);
router.use(locations.path, locations.router);
router.use(tripLocations.path, tripLocations.router);
router.use(trips.path, trips.router);
router.use(users.path, users.router);

module.exports = router;

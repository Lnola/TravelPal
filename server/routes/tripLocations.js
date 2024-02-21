const router = require('express').Router();
const { NOT_FOUND, BAD_REQUEST } = require('http-status');

const TripLocation = require('../models/TripLocation');
const Location = require('../models/Location');

const HttpError = require('../helpers/httpError');
const errorMessages = require('../helpers/errorMessages');

const path = '/trip_locations';

router.get(`/:id`, async (req, res) => {
  const tripId = req.params.id;
  try {
    const tripLocations = await TripLocation.findAll({ where: { tripId } });
    return res.send(tripLocations);
  } catch (err) {
    console.log(err);
    return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND));
  }
});

router.post('/add', async (req, res) => {
  const { tripId, locationId, date } = req.body;
  const newTrip = { tripId, locationId, date };

  const matchingTripLocation = await TripLocation.findAll({
    where: { tripId, locationId, date },
  });

  if (matchingTripLocation.length) return;

  try {
    const tripLocation = await TripLocation.create(newTrip);
    return res.send(tripLocation);
  } catch (err) {
    console.log(err);
    return next(new HttpError(BAD_REQUEST, errorMessages.BAD_REQUEST));
  }
});

router.get(`/images/:id`, async (req, res) => {
  const tripId = req.params.id;

  try {
    const tripLocations = await TripLocation.findAll({ where: { tripId } });
    const findLocationById = ({ locationId }) => Location.findByPk(locationId);
    const locationPromises = tripLocations.map(findLocationById);
    const locations = await Promise.all(locationPromises);
    const thumbnails = locations.map((location) => {
      const media = location.dataValues.result.data.places[0].main_media;
      if (media) return media.media[0].url;
      return null;
    });
    res.send(thumbnails);
  } catch (err) {
    console.log(err);
    return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND));
  }
});

module.exports = { path, router };

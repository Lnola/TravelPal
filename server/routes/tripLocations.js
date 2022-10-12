const router = require('express').Router();
const TripLocation = require('../models/TripLocation');
const Location = require('../models/Location');
const HttpError = require('./httpError');
const { NOT_FOUND, BAD_REQUEST } = require('http-status');
const errorMessages = require('./errorMessages');

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
    let thumbnails = [];

    if (tripLocations.length < 4) {
      for (let i = 0; i < 4 - tripLocations.length; i++) thumbnails.push(false);
      if (!tripLocations.length) return res.send(thumbnails);
    }

    tripLocations.forEach(async (tripLocation, index) => {
      const { locationId } = tripLocation.dataValues;

      const location = await Location.findByPk(locationId);

      const mainMedia = location.dataValues.result.data.places[0].main_media;
      if (mainMedia) thumbnails.push(mainMedia.media[0].url);

      // if (tripLocations.length === index + 1)
      return res.send(thumbnails);
      // else return res.sendStatus(404);
    });
  } catch (err) {
    console.log(err);
    return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND));
  }
});

module.exports = { path, router };

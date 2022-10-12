const router = require('express').Router();
const CityLocation = require('../models/CityLocation');
const { BAD_REQUEST } = require('http-status');
const errorMessages = require('../helpers/errorMessages');

const path = '/city-locations';

router.get('/', async (req, res) => {
  const { city } = req.query;
  if (!city) return next(new HttpError(BAD_REQUEST, errorMessages.NOT_FOUND));

  try {
    const cityLocation = await CityLocation.findAll({ where: { query: city } });
    return res.send(cityLocation);
  } catch (err) {
    console.log(err);
    return next(new HttpError(BAD_REQUEST, errorMessages.NOT_FOUND));
  }
});

module.exports = { path, router };

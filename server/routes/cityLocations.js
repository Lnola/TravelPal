const router = require('express').Router();
const CityLocation = require('../models/CityLocation');

const path = '/city-locations';

router.get('/', async (req, res) => {
  const { city } = req.query;
  if (!city) return res.sendStatus(400);

  try {
    const cityLocation = await CityLocation.findAll({ where: { query: city } });
    res.send(cityLocation);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

module.exports = { path, router };

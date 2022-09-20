const router = require('express').Router();
const CityLocation = require('../models/CityLocation');

const path = '/city-locations';

router.get('/', (req, res) => {
  const { city } = req.query;

  if (city.length !== 0)
    CityLocation.findAll({ where: { query: city } })
      .then((cityLocation) => {
        res.send(cityLocation);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
});

module.exports = { path, router };

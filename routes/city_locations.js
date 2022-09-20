const express = require("express");
const router = express.Router();
const verifyToken = require("../helpers/verifyToken");
const CityLocation = require("../models/CityLocation");

router.get("/", verifyToken, (req, res) => {
  const { city } = req.query;

  if (city.length !== 0)
    CityLocation.findAll({ where: { query: city } })
      .then(cityLocation => {
        res.send(cityLocation);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
});

module.exports = router;

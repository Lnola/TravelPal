const express = require("express");
const router = express.Router();
const CityLocation = require("../models/CityLocation");

router.get("/", (req, res) =>
  CityLocation.findAll()
    .then(cityLocation => {
      res.send(cityLocation);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
);

module.exports = router;

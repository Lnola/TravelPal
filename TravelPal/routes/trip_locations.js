const express = require("express");
const verifyToken = require("../helpers/verifyToken");
const router = express.Router();
const TripLocation = require("../models/TripLocation");

router.get(`/:id`, verifyToken, (req, res) => {
  console.log(req.params.id);
  TripLocation.findAll({ where: { tripId: req.params.id } })
    .then(tripLocations => {
      res.send(tripLocations);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    });
});

module.exports = router;

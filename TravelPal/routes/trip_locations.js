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

router.post("/add", verifyToken, (req, res) => {
  const { tripId, locationId, date } = req.body;
  console.log(tripId, locationId, date);

  TripLocation.findAll({ where: { tripId, locationId, date } }).then(
    exactSameTL => {
      if (exactSameTL.length === 0)
        TripLocation.create({ tripId, locationId, date })
          .then(response => res.send(response))
          .catch(err => {
            console.log(err);
            res.sendStatus(422);
          });
    }
  );
});

module.exports = router;

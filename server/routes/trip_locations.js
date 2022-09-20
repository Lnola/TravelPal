const router = require('express').Router();
const TripLocation = require('../models/TripLocation');
const Location = require('../models/Location');

const path = 'trip_locations';

router.get(`/:id`, (req, res) => {
  console.log(req.params.id);
  TripLocation.findAll({ where: { tripId: req.params.id } })
    .then((tripLocations) => {
      res.send(tripLocations);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

router.post('/add', (req, res) => {
  const { tripId, locationId, date } = req.body;
  console.log(tripId, locationId, date);

  TripLocation.findAll({ where: { tripId, locationId, date } }).then(
    (exactSameTL) => {
      if (exactSameTL.length === 0)
        TripLocation.create({ tripId, locationId, date })
          .then((response) => res.send(response))
          .catch((err) => {
            console.log(err);
            res.sendStatus(422);
          });
    }
  );
});

router.get(`/images/:id`, (req, res) => {
  console.log(req.params.id);

  TripLocation.findAll({ where: { tripId: req.params.id } })
    .then((tripLocations) => {
      let thumbnails = [];

      if (tripLocations.length < 4) {
        for (let i = 0; i < 4 - tripLocations.length; i++)
          thumbnails.push(false);

        if (tripLocations.length === 0) res.send(thumbnails);
      }

      tripLocations.forEach((tripLocation, index) => {
        Location.findByPk(tripLocation.dataValues.locationId)
          .then((locations) => {
            locations.dataValues.result.data.places[0].main_media !== null
              ? thumbnails.push(
                  locations.dataValues.result.data.places[0].main_media.media[0]
                    .url
                )
              : null;

            if (tripLocations.length === index + 1) res.send(thumbnails);
          })
          .catch(() => res.sendStatus(404));
      });

      // res.send(tripLocations);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

module.exports = { path, router };

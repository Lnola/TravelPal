const express = require('express');
const verifyToken = require('../helpers/verifyToken');
const router = express.Router();
const Favorite = require('../models/Favorite');

router.get(`/user/:userId/location/:locationId`, verifyToken, (req, res) => {
  const { userId, locationId } = req.params;

  Favorite.findAll({ where: { userId, locationId } })
    .then((favorites) => {
      if (favorites.length === 0) res.send(false);
      else res.send(true);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

router.post('/add', verifyToken, (req, res) => {
  const { userId, locationId } = req.body;

  Favorite.findAll({ where: { userId, locationId } }).then((sameFavorites) => {
    if (sameFavorites.length === 0)
      Favorite.create({ userId, locationId })
        .then((response) => res.send(response))
        .catch((err) => {
          console.log(err);
          res.sendStatus(422);
        });
    else res.sendStatus(200);
  });
});

router.delete(
  '/delete/user/:userId/location/:locationId',
  verifyToken,
  (req, res) => {
    const { userId, locationId } = req.params;

    Favorite.destroy({ where: { userId, locationId } })
      .then((response) => {
        console.log(response);
        res.sendStatus(204);
      })
      .catch(() => sendStatus(422));
  }
);

module.exports = router;

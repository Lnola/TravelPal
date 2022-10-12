const router = require('express').Router();
const Favorite = require('../models/Favorite');
const HttpError = require('./httpError');
const { NOT_FOUND, BAD_REQUEST } = require('http-status');
const errorMessages = require('./errorMessages');

const path = '/favorites';

router.get(`/user/:userId/location/:locationId`, async (req, res) => {
  const { userId, locationId } = req.params;

  try {
    const favorites = await Favorite.findAll({ where: { userId, locationId } });
    return res.send(!!favorites.length);
  } catch (err) {
    console.log(err);
    return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND));
  }
});

router.post('/add', async (req, res) => {
  const { userId, locationId } = req.body;
  const newFavorite = { userId, locationId };

  const matchingFavorites = await Favorite.findAll({
    where: { userId, locationId },
  });
  if (matchingFavorites.length) return res.sendStatus(200);

  try {
    const favorites = await Favorite.create(newFavorite);
    return res.send(favorites);
  } catch (err) {
    console.log(err);
    return next(new HttpError(BAD_REQUEST, errorMessages.BAD_REQUEST));
  }
});

router.delete('/delete/user/:userId/location/:locationId', async (req, res) => {
  const { userId, locationId } = req.params;

  try {
    await Favorite.destroy({ where: { userId, locationId } });
    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    return next(new HttpError(BAD_REQUEST, errorMessages.BAD_REQUEST));
  }
});

module.exports = { path, router };

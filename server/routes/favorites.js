const router = require('express').Router();
const Favorite = require('../models/Favorite');

const path = '/favorites';

router.get(`/user/:userId/location/:locationId`, async (req, res) => {
  const { userId, locationId } = req.params;

  try {
    const favorites = await Favorite.findAll({ where: { userId, locationId } });
    res.send(!!favorites.length);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

router.post('/add', async (req, res) => {
  const { userId, locationId } = req.body;

  const matchingFavorites = await Favorite.findAll({
    where: { userId, locationId },
  });
  if (matchingFavorites.length) return res.sendStatus(200);

  try {
    const favorites = await Favorite.create({ userId, locationId });
    res.send(favorites);
  } catch (err) {
    console.log(err);
    res.sendStatus(422);
  }
});

router.delete('/delete/user/:userId/location/:locationId', async (req, res) => {
  const { userId, locationId } = req.params;

  try {
    await Favorite.destroy({ where: { userId, locationId } });
    res.sendStatus(204);
  } catch (err) {
    console.log(err);
    res.sendStatus(422);
  }
});

module.exports = { path, router };

const router = require('express').Router();
const Favorite = require('../models/Favorite');

const path = '/favorites';

router.get(`/user/:userId/location/:locationId`, async (req, res) => {
  const { userId, locationId } = req.params;

  try {
    const favorites = await Favorite.findAll({ where: { userId, locationId } });
    return res.send(!!favorites.length);
  } catch (err) {
    console.log(err);
    return res.sendStatus(404);
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
    return res.sendStatus(422);
  }
});

router.delete('/delete/user/:userId/location/:locationId', async (req, res) => {
  const { userId, locationId } = req.params;

  try {
    await Favorite.destroy({ where: { userId, locationId } });
    return res.sendStatus(204);
  } catch (err) {
    console.log(err);
    return res.sendStatus(422);
  }
});

module.exports = { path, router };

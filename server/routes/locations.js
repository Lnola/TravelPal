const router = require('express').Router();

const Location = require('../models/Location');

const path = '/locations';

router.get(`/:id`, async (req, res) => {
  const { id } = req.params;

  try {
    const location = await Location.findByPk(id);
    return res.send(location);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

router.get(`/poi/:id`, async (req, res) => {
  const { id } = req.params;

  try {
    const location = await Location.findOne({ where: { poi: id } });
    return res.send(location);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

module.exports = { path, router };

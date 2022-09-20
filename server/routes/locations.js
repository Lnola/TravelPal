const router = require('express').Router();
const Location = require('../models/Location');

const path = '/locations';

router.get(`/:id`, (req, res) =>
  Location.findByPk(req.params.id)
    .then((locations) => {
      res.send(locations);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
);

router.get(`/poi/:id`, (req, res) => {
  Location.findOne({ where: { poi: req.params.id } })
    .then((locations) => {
      res.send(locations);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = { path, router };

const express = require("express");
const router = express.Router();
const verifyToken = require("../helpers/verifyToken");
const Location = require("../models/Location");

router.get(`/:id`, verifyToken, (req, res) =>
  Location.findByPk(req.params.id)
    .then(locations => {
      res.send(locations);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
);

router.get(`/poi/:id`, verifyToken, (req, res) => {
  Location.findOne({ where: { poi: req.params.id } })
    .then(locations => {
      res.send(locations);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;

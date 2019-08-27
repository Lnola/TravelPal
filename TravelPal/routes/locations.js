const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

router.get(`/:id`, (req, res) =>
  Location.findByPk(req.params.id)
    .then(locations => {
      res.send(locations);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
);

module.exports = router;

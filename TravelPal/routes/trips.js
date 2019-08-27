const express = require("express");
const verifyToken = require("../helpers/verifyToken");
const router = express.Router();
const Trip = require("../models/Trip");

router.get("/:userId", verifyToken, (req, res) =>
  Trip.findAll({ where: { userId: req.params.userId } })
    .then(trips => {
      res.send(trips);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    })
);

module.exports = router;

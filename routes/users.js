const express = require('express');
const router = express.Router();
const verifyToken = require('../helpers/verifyToken');
const User = require('../models/User');

router.get('/', verifyToken, (req, res) =>
  User.findAll()
    .then((users) => {
      console.log(users);
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
);

module.exports = router;

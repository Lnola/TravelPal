const router = require('express').Router();
const User = require('../models/User');

const path = '/users';

router.get('/', (req, res) =>
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

module.exports = { path, router };

const router = require('express').Router();

const User = require('../models/User');

const path = '/users';

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.send(users);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

module.exports = { path, router };

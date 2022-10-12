const router = require('express').Router();
const bcrypt = require('bcrypt');
const { CONFLICT, NOT_FOUND } = require('http-status');

const RefreshToken = require('../models/RefreshToken');
const User = require('../models/User');

const HttpError = require('../helpers/httpError');
const errorMessages = require('../helpers/errorMessages');

const { SALT_ROUNDS } = process.env;

const path = '/auth';

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  if (!user) return next(new HttpError(CONFLICT, errorMessages.LOGIN_ERROR));

  bcrypt.compare(password, user.password, (_, doesMatch) =>
    generateRefreshToken(res, user, doesMatch, next)
  );
});

router.post('/refresh', async (req, res, next) => {
  const { access, refresh, userCredentials } = req.body;
  const { username } = userCredentials;

  if (access.length) return res.sendStatus(200);

  await RefreshToken.destroy({ where: { token: refresh } });

  const user = await User.findOne({ where: { username } });
  generateRefreshToken(res, user, true, next);
});

router.delete('/delete/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    await RefreshToken.destroy({ where: { userId } });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND));
  }
});

router.post('/register', (req, res, next) => {
  const { userCredentials } = req.body;
  const { password } = req.body.userCredentials;

  const saltRounds = SALT_ROUNDS;
  bcrypt.hash(password, saltRounds, async (_, hashPassword) => {
    const newUser = { ...userCredentials, password: hashPassword };
    const user = await User.create(newUser);
    generateRefreshToken(res, user, true, next);
  });
});

module.exports = { path, router };

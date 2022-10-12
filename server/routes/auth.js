const router = require('express').Router();
const bcrypt = require('bcrypt');
const { CONFLICT, NOT_FOUND } = require('http-status');

const RefreshToken = require('../models/RefreshToken');
const User = require('../models/User');

const HttpError = require('../helpers/httpError');
const errorMessages = require('../helpers/errorMessages');
const { generateTokens } = require('../helpers/auth');

const { SALT_ROUNDS } = process.env;

const path = '/auth';

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  if (!user) return next(new HttpError(CONFLICT, errorMessages.LOGIN_ERROR));

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return next(new HttpError(UNAUTHORIZED, errorMessages.LOGIN_ERROR));

  try {
    const tokens = await generateTokens(user, next);
    return res.json(tokens);
  } catch {
    return next(new HttpError());
  }
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

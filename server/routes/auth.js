const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
  CONFLICT,
  NOT_FOUND,
  UNAUTHORIZED,
  FORBIDDEN,
  OK,
} = require('http-status');
const { ValidationError } = require('sequelize');

const RefreshToken = require('../models/RefreshToken');
const User = require('../models/User');

const HttpError = require('../helpers/httpError');
const errorMessages = require('../helpers/errorMessages');
const { generateTokens, authenticate } = require('../helpers/auth');

const { SALT_ROUNDS } = process.env;

const path = '/auth';

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body.userCredentials;

  const user = await User.findOne({ where: { username } });
  if (!user) return next(new HttpError(CONFLICT, errorMessages.LOGIN_ERROR));

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return next(new HttpError(UNAUTHORIZED, errorMessages.LOGIN_ERROR));

  try {
    const tokens = await generateTokens(user);
    return res.json(tokens);
  } catch {
    return next(new HttpError());
  }
});

router.post('/register', async (req, res, next) => {
  const { userCredentials } = req.body;
  const { password } = userCredentials;

  const saltRounds = Number(SALT_ROUNDS) || 10;
  const hashPassword = bcrypt.hashSync(password, saltRounds);

  try {
    const newUser = { ...userCredentials, password: hashPassword };
    const user = await User.create(newUser);
    const tokens = await generateTokens(user);
    return res.json(tokens);
  } catch (err) {
    if (err instanceof ValidationError)
      return next(new HttpError(CONFLICT, errorMessages.REGISTER_ERROR));

    return next(new HttpError());
  }
});

router.post('/refresh', async (req, res, next) => {
  const { refresh, username } = req.body;

  try {
    await RefreshToken.destroy({ where: { token: refresh } });
    const user = await User.findOne({ where: { username } });
    const tokens = await generateTokens(user);
    return res.json(tokens);
  } catch (err) {
    return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN));
  }
});

router.delete('/logout', authenticate, async (req, res, next) => {
  const { user } = req;

  try {
    const userId = user.id;
    await RefreshToken.destroy({ where: { userId } });
    return res.status(OK).send();
  } catch (err) {
    return next(new HttpError(NOT_FOUND, errorMessages.NOT_FOUND));
  }
});

module.exports = { path, router };

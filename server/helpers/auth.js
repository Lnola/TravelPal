const jwt = require('jsonwebtoken');
const randtoken = require('rand-token');
const { FORBIDDEN } = require('http-status');

const RefreshToken = require('../models/RefreshToken');

const HttpError = require('./httpError');
const errorMessages = require('./errorMessages');

const { JWT_SECRET_KEY } = process.env;

const authenticate = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (!bearerHeader)
    return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN));

  const bearer = bearerHeader.split(' ');
  const accessToken = bearer[1];

  try {
    const { user } = jwt.verify(accessToken, JWT_SECRET_KEY);
    req.user = user;
    return next();
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return next(new HttpError(FORBIDDEN, errorMessages.TOKEN_EXPIRED));
    }

    if (err instanceof jwt.JsonWebTokenError) {
      return next(new HttpError(FORBIDDEN, errorMessages.FORBIDDEN));
    }
  }
};

const generateTokens = async (user) => {
  const payload = { user };
  const secretKey = JWT_SECRET_KEY;
  const options = { expiresIn: '5m' };
  const userId = user.id;

  const accessToken = jwt.sign(payload, secretKey, options);
  const refreshToken = randtoken.uid(50);

  const tokenDbEntry = { userId, token: refreshToken };
  await RefreshToken.create(tokenDbEntry);

  return { accessToken, refreshToken, userId };
};

module.exports = { authenticate, generateTokens };

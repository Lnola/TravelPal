const jwt = require('jsonwebtoken');
const randtoken = require('rand-token');
const RefreshToken = require('../models/RefreshToken');
const HttpError = require('./httpError');
const { UNAUTHORIZED, FORBIDDEN } = require('http-status');
const errorMessages = require('./errorMessages');

const { JWT_SECRET_KEY } = process.env;

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (!bearerHeader)
    return next(new HttpError(FORBIDDEN, errorMessages.LOGIN_ERROR));

  const bearer = bearerHeader.split(' ');
  const bearerToken = bearer[1];

  req.token = bearerToken;
  next();
};

const sign = async (res, user, accessToken) => {
  // Create refresh token
  const refreshToken = randtoken.uid(50);

  // Save refresh token to DB
  try {
    const userId = user.id;
    const newRefreshToken = { userId, token: refreshToken };

    await RefreshToken.create(newRefreshToken);
    const response = { accessToken, refreshToken, userId };
    return res.json(response);
  } catch (err) {
    return next(new HttpError(FORBIDDEN, errorMessages.LOGIN_ERROR));
  }
};

const generateRefreshToken = (res, user, doesMatch, next) => {
  if (!doesMatch)
    return next(new HttpError(UNAUTHORIZED, errorMessages.LOGIN_ERROR));

  // Create jwt token
  const payload = { user };
  const secretKey = JWT_SECRET_KEY;
  const options = { expiresIn: '5m' };
  jwt.sign(payload, secretKey, options, (_, accessToken) =>
    sign(res, user, accessToken)
  );
};

module.exports = { verifyToken, generateRefreshToken };

const jwt = require('jsonwebtoken');
const randtoken = require('rand-token');
const RefreshToken = require('../models/RefreshToken');

const { JWT_SECRET_KEY } = process.env;

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];
  if (!bearerHeader) return res.sendStatus(403);

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
    return res.send(response);
  } catch (err) {
    console.log(err);
    return res.sendStatus(403);
  }
};

const generateRefreshToken = (res, user, doesMatch) => {
  if (!doesMatch) return res.sendStatus(401);

  // Create jwt token
  const payload = { user };
  const secretKey = JWT_SECRET_KEY;
  const options = { expiresIn: '5m' };
  jwt.sign(payload, secretKey, options, (_, accessToken) =>
    sign(res, user, accessToken)
  );
};

module.exports = { verifyToken, generateRefreshToken };

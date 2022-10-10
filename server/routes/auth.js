const router = require('express').Router();
const bcrypt = require('bcrypt');
const RefreshToken = require('../models/RefreshToken');
const User = require('../models/User');
const { generateRefreshToken } = require('../helpers/auth');

const { SALT_ROUNDS } = process.env;

const path = '/auth';

router.post('/login', async (req, res) => {
  const { username, password } = req.body.userCredentials;

  const user = await User.findOne({ where: { username } });
  if (!user) return res.sendStatus(404);

  bcrypt.compare(password, user.password, (_, doesMatch) =>
    generateRefreshToken(res, user, doesMatch)
  );
});

router.post('/refresh', async (req, res) => {
  const { access, refresh, userCredentials } = req.body;
  const { username } = userCredentials;

  if (access.length) return res.sendStatus(200);

  await RefreshToken.destroy({ where: { token: refresh } });

  const user = await User.findOne({ where: { username } });
  generateRefreshToken(res, user, true);
});

router.delete('/delete/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    await RefreshToken.destroy({ where: { userId } });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(404);
  }
});

router.post('/register', (req, res) => {
  const { userCredentials } = req.body;
  const { password } = req.body.userCredentials;

  const saltRounds = SALT_ROUNDS;
  bcrypt.hash(password, saltRounds, async (_, hashPassword) => {
    const newUser = { ...userCredentials, password: hashPassword };
    const user = await User.create(newUser);
    generateRefreshToken(res, user, true);
  });
});

module.exports = { path, router };

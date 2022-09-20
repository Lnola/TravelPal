const router = require('express').Router();
const bcrypt = require('bcrypt');
const randtoken = require('rand-token');
const jwt = require('jsonwebtoken');
const RefreshToken = require('../models/RefreshToken');
const User = require('../models/User');

const JWT_SECRET_KEY = 'LZUtOhToSMxihZBDgllg';

const path = '/auth';

router.post('/login', (req, res) => {
  const { userCredentials } = req.body;

  User.findOne({ where: { username: userCredentials.username } }).then(
    (user) => {
      if (user !== null) {
        bcrypt.compare(
          userCredentials.password,
          user.password,
          (err, doesMatch) => {
            if (doesMatch) {
              // Create jwt token
              jwt.sign(
                { user },
                JWT_SECRET_KEY,
                { expiresIn: '5m' },
                (error, jwtToken) => {
                  // Create refresh token
                  const refreshToken = randtoken.uid(50);

                  // Save refresh token to DB
                  RefreshToken.create({
                    userId: user.id,
                    token: refreshToken,
                  }).then(() => console.log('Refresh token created...'));

                  res.send({
                    accessToken: jwtToken,
                    refreshToken,
                    userId: user.id,
                  });
                }
              );
            } else res.sendStatus(401);
          }
        );
      } else res.sendStatus(404);
    }
  );
});

router.post('/refresh', (req, res) => {
  const { access, refresh, userCredentials } = req.body;

  if (access.length === 0)
    RefreshToken.destroy({
      where: { token: refresh },
    }).then(() => {
      User.findOne({ where: { username: userCredentials.username } }).then(
        (user) => {
          jwt.sign(
            { user },
            JWT_SECRET_KEY,
            { expiresIn: '5m' },
            (error, jwtToken) => {
              // Create refresh token
              const refreshToken = randtoken.uid(50);

              // Save refresh token to DB
              RefreshToken.create({
                userId: user.id,
                token: refreshToken,
              }).then(() => console.log('Refresh token created...'));

              res.send({ accessToken: jwtToken, refreshToken });
            }
          );
        }
      );
    });
});

router.delete('/delete/:userId', (req, res) => {
  const { userId } = req.params;

  RefreshToken.destroy({
    where: { userId },
  })
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(404));
});

router.post('/register', (req, res) => {
  const { name, surname, username, mail } = req.body.userCredentials;
  let { password } = req.body.userCredentials;

  bcrypt.hash(password, 10, (err, hash) => {
    User.create({ name, surname, username, email: mail, password: hash })
      .then((user) => {
        jwt.sign(
          { user },
          JWT_SECRET_KEY,
          { expiresIn: '5m' },
          (error, jwtToken) => {
            // Create refresh token
            const refreshToken = randtoken.uid(50);
            // Save refresh token to DB
            RefreshToken.create({
              userId: user.id,
              token: refreshToken,
            }).then(() => console.log('Refresh token created...'));
            res.send({
              accessToken: jwtToken,
              refreshToken,
              userId: user.id,
            });
          }
        );
      })
      .catch(() => {
        res.sendStatus(404);
      });
  });
});

module.exports = { path, router };

const express = require("express");
const bcrypt = require("bcrypt");
const randtoken = require("rand-token");
const jwt = require("jsonwebtoken");
const router = express.Router();
const RefreshToken = require("../models/RefreshToken");
const User = require("../models/User");

const JWT_SECRET_KEY = "LZUtOhToSMxihZBDgllg";

router.post("/login", (req, res) => {
  const { userCredentials } = req.body;

  User.findOne({ where: { username: userCredentials.username } }).then(user => {
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
              { expiresIn: "5m" },
              (error, jwtToken) => {
                // Create refresh token
                const refreshToken = randtoken.uid(50);

                // Save refresh token to DB
                RefreshToken.create({
                  userId: user.id,
                  token: refreshToken
                }).then(() => console.log("Refresh token created..."));

                res.send({
                  accessToken: jwtToken,
                  refreshToken,
                  userId: user.id
                });
              }
            );
          } else res.sendStatus(401);
        }
      );
    } else res.sendStatus(404);
  });
});

router.post("/refresh", (req, res) => {
  const { access, refresh, userCredentials } = req.body;

  if (access.length === 0)
    RefreshToken.destroy({
      where: { token: refresh }
    }).then(() => {
      User.findOne({ where: { username: userCredentials.username } }).then(
        user => {
          jwt.sign(
            { user },
            JWT_SECRET_KEY,
            { expiresIn: "5m" },
            (error, jwtToken) => {
              // Create refresh token
              const refreshToken = randtoken.uid(50);

              // Save refresh token to DB
              RefreshToken.create({
                userId: user.id,
                token: refreshToken
              }).then(() => console.log("Refresh token created..."));

              res.send({ accessToken: jwtToken, refreshToken });
            }
          );
        }
      );
    });
});

router.delete("/delete", (req, res) => {
  const { refresh } = req.body;

  RefreshToken.destroy({
    where: { token: refresh }
  })
    .then(() => res.sendStatus(204))
    .catch(() => res.sendStatus(404));
});

module.exports = router;

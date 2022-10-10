const { JWT_SECRET_KEY } = process.env;

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader !== undefined) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];

    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
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
    res.send(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(403);
  }
};

const generateRefreshToken = (res, user, doesMatch) => {
  if (!doesMatch) res.sendStatus(401);

  // Create jwt token
  const payload = { user };
  const secretKey = JWT_SECRET_KEY;
  const options = { expiresIn: '5m' };
  jwt.sign(payload, secretKey, options, (_, accessToken) =>
    sign(user, accessToken)
  );
};

module.exports = { verifyToken, generateRefreshToken };

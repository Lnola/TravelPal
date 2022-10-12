const HttpError = require('./httpError');
const { INTERNAL_SERVER_ERROR } = require('http-status');

const DEFAULT_ERROR = new HttpError(
  INTERNAL_SERVER_ERROR,
  'Something went wrong'
);

const errorHandler = (err, req, res, next) => {
  const { status, message } = err.status ? err : DEFAULT_ERROR;
  return res.status(status).json({ message });
};

module.exports = errorHandler;

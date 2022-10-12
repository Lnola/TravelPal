class HttpError extends Error {
  constructor(status, ...params) {
    super(...params);

    this.name = 'HttpError';
    this.status = status;

    Error.captureStackTrace(this, HttpError);
  }
}

module.exports = HttpError;

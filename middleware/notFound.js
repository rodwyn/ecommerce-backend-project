module.exports = (req, res, next) => {
  const error = new Error('Not found');

  error.message = 'Invalid route';
  error.status = 4004;
  next(error);
}

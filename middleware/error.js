module.exports = (error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
}

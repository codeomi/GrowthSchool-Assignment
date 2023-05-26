const ErrorHandler = require("../utils/ErrorHandler.js");

module.exports = (err, req, res, next) => {
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

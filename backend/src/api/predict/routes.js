/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

module.exports = (handler) => {
  router.post('/predict', handler.postInputHandler);
  router.get('/predict', handler.getResultHandler);

  return router;
};

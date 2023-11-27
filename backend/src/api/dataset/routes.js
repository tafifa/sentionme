/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

module.exports = (handler) => {
  router.post('/dataset', handler.postToDataset);

  return router;
};

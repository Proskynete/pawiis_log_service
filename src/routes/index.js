const express = require('express');
const LogController = require('../controllers/log.controller');

const routes = express.Router();

routes.get('/get', LogController.get);

module.exports = routes;

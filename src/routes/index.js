const express = require('express');
const LogController = require('../controllers/log.controller');

const routes = express.Router();

routes.get('/get', LogController.get);
routes.post('/create', LogController.create);

module.exports = routes;

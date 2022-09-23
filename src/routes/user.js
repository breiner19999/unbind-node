'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();


api.get('/registrar-tutor', UserController.saveUser);
api.get('/:thirdPartyProviderId/single-sign-on/unbind-account', UserController.unbind);


module.exports = api;
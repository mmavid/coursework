const make = require('./_makeRequestRoutes');
const makeCtrl = require('../controllers/requestController');
const { CallRequest, Car } = require('../models');
module.exports = make(makeCtrl(CallRequest, [{ model: Car, as: 'car', attributes: ['id','brand','model','year'] }]));

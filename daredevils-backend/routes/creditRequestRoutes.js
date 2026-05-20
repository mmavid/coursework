const make = require('./_makeRequestRoutes');
const makeCtrl = require('../controllers/requestController');
const { CreditRequest, Car } = require('../models');
module.exports = make(makeCtrl(CreditRequest, [{ model: Car, as: 'car', attributes: ['id','brand','model','year','price'] }]));

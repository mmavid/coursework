const make = require('./_makeRequestRoutes');
const makeCtrl = require('../controllers/requestController');
const { TestDriveRequest, Car } = require('../models');
module.exports = make(makeCtrl(TestDriveRequest, [{ model: Car, as: 'car', attributes: ['id','brand','model','year','price','imageUrl'] }]));

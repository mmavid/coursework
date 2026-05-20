const make = require('./_makeRequestRoutes');
const makeCtrl = require('../controllers/requestController');
const { ServiceRequest, Service } = require('../models');
module.exports = make(makeCtrl(ServiceRequest, [{ model: Service, as: 'service', attributes: ['id','name','category','price'] }]));

const make = require('./_makeRequestRoutes');
const makeCtrl = require('../controllers/requestController');
const { PartnershipRequest } = require('../models');
module.exports = make(makeCtrl(PartnershipRequest));

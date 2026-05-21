const make = require('./_makeRequestRoutes');
const makeCtrl = require('../controllers/requestController');
const { JobApplication, Vacancy } = require('../models');
module.exports = make(makeCtrl(JobApplication, [{ model: Vacancy, as: 'vacancy', attributes: ['id','title','department'] }]));

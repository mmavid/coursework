const makeController = require('./requestController');
const { TradeInRequest, Car } = require('../models');

const base = makeController(TradeInRequest, [
  { model: Car, as: 'targetCar', attributes: ['id','brand','model','year','price'] },
]);

base.create = async (req, res) => {
  try {
    const data = { ...req.body };

    if (data.clientYear && data.clientMileage !== undefined) {
      const age      = new Date().getFullYear() - +data.clientYear;
      const base_val = 1_500_000;
      const depr     = age * 80_000 + (+data.clientMileage / 1000) * 5_000;
      const condCoeff = { excellent: 1, good: 0.9, fair: 0.75, poor: 0.55 };
      data.estimatedValue = Math.max(
        base_val - depr,
        50_000
      ) * (condCoeff[data.clientCondition] || 0.9);
      data.estimatedValue = Math.round(data.estimatedValue / 1000) * 1000;
    }

    const item = await TradeInRequest.create(data);
    res.status(201).json(item);
  } catch (err) {
    if (err.name === 'SequelizeValidationError')
      return res.status(400).json({ error: err.errors.map(e => e.message) });
    res.status(500).json({ error: err.message });
  }
};

module.exports = base;

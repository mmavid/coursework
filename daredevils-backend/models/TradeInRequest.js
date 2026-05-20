// src/models/TradeInRequest.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TradeInRequest = sequelize.define('TradeInRequest', {
  id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:         { type: DataTypes.STRING,  allowNull: false },
  phone:        { type: DataTypes.STRING,  allowNull: false },
  email:        { type: DataTypes.STRING },
  // Авто клиента (сдаёт)
  clientBrand:  { type: DataTypes.STRING,  allowNull: false },
  clientModel:  { type: DataTypes.STRING,  allowNull: false },
  clientYear:   { type: DataTypes.INTEGER, allowNull: false },
  clientMileage:{ type: DataTypes.INTEGER },
  clientVin:    { type: DataTypes.STRING },
  clientCondition: { type: DataTypes.ENUM('excellent','good','fair','poor'), defaultValue: 'good' },
  // Авто дилера (покупает)
  targetCarId:  { type: DataTypes.INTEGER },                     // null = не выбрал конкретный
  // Оценка
  estimatedValue: { type: DataTypes.DECIMAL(14, 2) },           // оценочная стоимость (менеджер)
  status:       { type: DataTypes.ENUM('new','evaluating','offer_sent','accepted','rejected','cancelled'), defaultValue: 'new' },
  managerNote:  { type: DataTypes.TEXT },
}, { tableName: 'trade_in_requests', timestamps: true });

module.exports = TradeInRequest;

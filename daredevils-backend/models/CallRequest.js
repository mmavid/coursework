// src/models/CallRequest.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CallRequest = sequelize.define('CallRequest', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:        { type: DataTypes.STRING,  allowNull: false },
  phone:       { type: DataTypes.STRING,  allowNull: false },
  preferTime:  { type: DataTypes.STRING },                       // "10:00–12:00"
  subject:     { type: DataTypes.STRING },                       // краткая тема
  carId:       { type: DataTypes.INTEGER },                      // если привязан к авто
  status:      { type: DataTypes.ENUM('new','in_progress','done','cancelled'), defaultValue: 'new' },
  managerNote: { type: DataTypes.TEXT },
}, { tableName: 'call_requests', timestamps: true });

module.exports = CallRequest;

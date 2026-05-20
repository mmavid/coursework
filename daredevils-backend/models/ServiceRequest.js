// src/models/ServiceRequest.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ServiceRequest = sequelize.define('ServiceRequest', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:        { type: DataTypes.STRING,  allowNull: false },
  phone:       { type: DataTypes.STRING,  allowNull: false },
  email:       { type: DataTypes.STRING },
  serviceId:   { type: DataTypes.INTEGER },                      // FK → Service
  carBrand:    { type: DataTypes.STRING },
  carModel:    { type: DataTypes.STRING },
  carYear:     { type: DataTypes.INTEGER },
  carMileage:  { type: DataTypes.INTEGER },
  vin:         { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT },                         // что беспокоит
  preferDate:  { type: DataTypes.DATEONLY, allowNull: false },
  preferTime:  { type: DataTypes.STRING },
  status:      { type: DataTypes.ENUM('new','confirmed','in_work','done','cancelled'), defaultValue: 'new' },
  totalCost:   { type: DataTypes.DECIMAL(10, 2) },              // итоговая стоимость
  managerNote: { type: DataTypes.TEXT },
}, { tableName: 'service_requests', timestamps: true });

module.exports = ServiceRequest;

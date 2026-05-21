const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Service = sequelize.define('Service', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:        { type: DataTypes.STRING,  allowNull: false },
  category:    { type: DataTypes.ENUM('maintenance','repair','bodywork','diagnostics','tires','other'), defaultValue: 'other' },
  description: { type: DataTypes.TEXT },
  price:       { type: DataTypes.DECIMAL(10, 2) },              
  duration:    { type: DataTypes.INTEGER },                     
  isActive:    { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'services', timestamps: true });

module.exports = Service;

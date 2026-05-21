const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CallRequest = sequelize.define('CallRequest', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:        { type: DataTypes.STRING,  allowNull: false },
  phone:       { type: DataTypes.STRING,  allowNull: false },
  preferTime:  { type: DataTypes.STRING },                       
  subject:     { type: DataTypes.STRING },                      
  carId:       { type: DataTypes.INTEGER },                      
  status:      { type: DataTypes.ENUM('new','in_progress','done','cancelled'), defaultValue: 'new' },
  managerNote: { type: DataTypes.TEXT },
}, { tableName: 'call_requests', timestamps: true });

module.exports = CallRequest;

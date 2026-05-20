const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TestDriveRequest = sequelize.define('TestDriveRequest', {
  id:          { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:        { type: DataTypes.STRING,  allowNull: false },
  phone:       { type: DataTypes.STRING,  allowNull: false },
  email:       { type: DataTypes.STRING },
  carId:       { type: DataTypes.INTEGER, allowNull: false },
  preferDate:  { type: DataTypes.DATEONLY, allowNull: false },
  preferTime:  { type: DataTypes.STRING },
  hasLicense:  { type: DataTypes.BOOLEAN, defaultValue: true },
  status:      { type: DataTypes.ENUM('new','confirmed','completed','cancelled'), defaultValue: 'new' },
  managerNote: { type: DataTypes.TEXT },
}, { tableName: 'test_drive_requests', timestamps: true });

module.exports = TestDriveRequest;

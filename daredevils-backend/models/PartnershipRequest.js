// src/models/PartnershipRequest.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PartnershipRequest = sequelize.define('PartnershipRequest', {
  id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  companyName:  { type: DataTypes.STRING,  allowNull: false },
  contactName:  { type: DataTypes.STRING,  allowNull: false },
  email:        { type: DataTypes.STRING,  allowNull: false },
  phone:        { type: DataTypes.STRING },
  website:      { type: DataTypes.STRING },
  type:         { type: DataTypes.ENUM('supplier','service_partner','insurance','bank','media','other'), defaultValue: 'other' },
  description:  { type: DataTypes.TEXT },                        // предложение о сотрудничестве
  status:       { type: DataTypes.ENUM('new','reviewing','negotiation','approved','rejected'), defaultValue: 'new' },
  managerNote:  { type: DataTypes.TEXT },
}, { tableName: 'partnership_requests', timestamps: true });

module.exports = PartnershipRequest;

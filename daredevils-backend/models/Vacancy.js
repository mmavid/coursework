// src/models/Vacancy.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Vacancy = sequelize.define('Vacancy', {
  id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title:        { type: DataTypes.STRING, allowNull: false },
  department:   { type: DataTypes.STRING },                      // Отдел продаж, Сервис, IT...
  description:  { type: DataTypes.TEXT },
  requirements: { type: DataTypes.TEXT },
  salaryFrom:   { type: DataTypes.INTEGER },
  salaryTo:     { type: DataTypes.INTEGER },
  schedule:     { type: DataTypes.ENUM('full','part','remote','shift'), defaultValue: 'full' },
  isActive:     { type: DataTypes.BOOLEAN, defaultValue: true },
}, { tableName: 'vacancies', timestamps: true });

module.exports = Vacancy;

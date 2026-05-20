// src/models/JobApplication.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const JobApplication = sequelize.define('JobApplication', {
  id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  vacancyId:    { type: DataTypes.INTEGER, allowNull: false },   // FK → Vacancy
  name:         { type: DataTypes.STRING,  allowNull: false },
  email:        { type: DataTypes.STRING,  allowNull: false },
  phone:        { type: DataTypes.STRING },
  coverLetter:  { type: DataTypes.TEXT },
  resumeUrl:    { type: DataTypes.STRING },                      // ссылка на резюме / файл
  experience:   { type: DataTypes.INTEGER },                     // лет опыта
  status:       { type: DataTypes.ENUM('new','reviewing','interview','offer','rejected'), defaultValue: 'new' },
  managerNote:  { type: DataTypes.TEXT },
}, { tableName: 'job_applications', timestamps: true });

module.exports = JobApplication;

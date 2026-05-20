const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CreditRequest = sequelize.define('CreditRequest', {
  id:              { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name:            { type: DataTypes.STRING,  allowNull: false },
  phone:           { type: DataTypes.STRING,  allowNull: false },
  email:           { type: DataTypes.STRING },
  carId:           { type: DataTypes.INTEGER, allowNull: false },
  initialPayment:  { type: DataTypes.DECIMAL(14, 2) },           // первоначальный взнос
  termMonths:      { type: DataTypes.INTEGER },                   // срок кредита (мес.)
  monthlyIncome:   { type: DataTypes.DECIMAL(12, 2) },           // доход клиента
  employmentType:  { type: DataTypes.ENUM('employee','selfemployed','business','retired','other'), defaultValue: 'employee' },
  status:          { type: DataTypes.ENUM('new','reviewing','approved','rejected','cancelled'), defaultValue: 'new' },
  approvedAmount:  { type: DataTypes.DECIMAL(14, 2) },           // заполняет менеджер
  approvedRate:    { type: DataTypes.DECIMAL(5, 2) },            // % ставка
  managerNote:     { type: DataTypes.TEXT },
}, { tableName: 'credit_requests', timestamps: true });

module.exports = CreditRequest;

// src/models/Car.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Car = sequelize.define('Car', {
  id:           { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  brand:        { type: DataTypes.STRING,  allowNull: false },
  model:        { type: DataTypes.STRING,  allowNull: false },
  year:         { type: DataTypes.INTEGER, allowNull: false },
  price:        { type: DataTypes.DECIMAL(14, 2), allowNull: false },
  mileage:      { type: DataTypes.INTEGER, defaultValue: 0 },
  engine:       { type: DataTypes.STRING },                     // "2.0L Бензин"
  power:        { type: DataTypes.INTEGER },                    // л.с.
  transmission: { type: DataTypes.ENUM('Механика','Автомат','Робот','Вариатор'), defaultValue: 'Автомат' },
  drive:        { type: DataTypes.ENUM('FWD','RWD','AWD','4WD'), defaultValue: 'FWD' },
  bodyType:     { type: DataTypes.ENUM('Седан','Хэтчбек','Кроссовер','Внедорожник','Купе','Универсал','Минивэн','Пикап'), allowNull: false },
  color:        { type: DataTypes.STRING },
  vin:          { type: DataTypes.STRING, unique: true },
  description:  { type: DataTypes.TEXT },
  isNew:        { type: DataTypes.BOOLEAN, defaultValue: true },
  status:       { type: DataTypes.ENUM('available','reserved','sold'), defaultValue: 'available' },
  imageUrl:     { type: DataTypes.STRING },
}, { tableName: 'cars', timestamps: true });

module.exports = Car;

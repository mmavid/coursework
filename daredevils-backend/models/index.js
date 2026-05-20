const sequelize = require('../config/database');
const User = require('./User');
const Car = require('./Car');
const Service = require('./Service');
const Vacancy = require('./Vacancy');
const CallRequest = require('./CallRequest');
const TestDriveRequest = require('./TestDriveRequest');
const CreditRequest = require('./CreditRequest');
const TradeInRequest = require('./TradeInRequest');
const ServiceRequest = require('./ServiceRequest');
const JobApplication = require('./JobApplication');
const PartnershipRequest = require('./PartnershipRequest');

// Car associations
Car.hasMany(TestDriveRequest, { foreignKey: 'carId', as: 'testDrives' });
Car.hasMany(CreditRequest, { foreignKey: 'carId', as: 'creditReqs' });
Car.hasMany(TradeInRequest, { foreignKey: 'targetCarId', as: 'tradeIns' });
Car.hasMany(CallRequest, { foreignKey: 'carId', as: 'callRequests' });

TestDriveRequest.belongsTo(Car, { foreignKey: 'carId', as: 'car' });
CreditRequest.belongsTo(Car, { foreignKey: 'carId', as: 'car' });
TradeInRequest.belongsTo(Car, { foreignKey: 'targetCarId', as: 'targetCar' });
CallRequest.belongsTo(Car, { foreignKey: 'carId', as: 'car' });

// Service associations
Service.hasMany(ServiceRequest, { foreignKey: 'serviceId', as: 'requests' });
ServiceRequest.belongsTo(Service, { foreignKey: 'serviceId', as: 'service' });

// Vacancy associations
Vacancy.hasMany(JobApplication, { foreignKey: 'vacancyId', as: 'applications' });
JobApplication.belongsTo(Vacancy, { foreignKey: 'vacancyId', as: 'vacancy' });

module.exports = {
  sequelize,
  User,
  Car,
  Service,
  Vacancy,
  CallRequest,
  TestDriveRequest,
  CreditRequest,
  TradeInRequest,
  ServiceRequest,
  JobApplication,
  PartnershipRequest,
};
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const { sequelize } = require('./models');
const errorHandler = require('./middleware/errorHandler');

// Routes
const carRoutes = require('./routes/carRoutes');
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const vacancyRoutes = require('./routes/vacancyRoutes');
const callRequestRoutes = require('./routes/callRequestRoutes');
const testDriveRoutes = require('./routes/testDriveRoutes');
const creditRequestRoutes = require('./routes/creditRequestRoutes');
const tradeInRoutes = require('./routes/tradeInRoutes');
const serviceRequestRoutes = require('./routes/serviceRequestRoutes');
const jobApplicationRoutes = require('./routes/jobApplicationRoutes');
const partnershipRoutes = require('./routes/partnershipRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, '../public')));

// API Routes
app.use('/api/cars', carRoutes);
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/vacancies', vacancyRoutes);
app.use('/api/call-requests', callRequestRoutes);
app.use('/api/test-drive-requests', testDriveRoutes);
app.use('/api/credit-requests', creditRequestRoutes);
app.use('/api/trade-in-requests', tradeInRoutes);
app.use('/api/service-requests', serviceRequestRoutes);
app.use('/api/job-applications', jobApplicationRoutes);
app.use('/api/partnership-requests', partnershipRoutes);

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

// API info
app.get('/api', (req, res) => res.json({
  endpoints: {
    cars: '/api/cars',
    users: '/api/users',
    services: '/api/services',
    vacancies: '/api/vacancies',
    callRequests: '/api/call-requests',
    testDriveRequests: '/api/test-drive-requests',
    creditRequests: '/api/credit-requests',
    tradeInRequests: '/api/trade-in-requests',
    serviceRequests: '/api/service-requests',
    jobApplications: '/api/job-applications',
    partnershipRequests: '/api/partnership-requests',
  }
}));

// 404 handler
app.use((req, res) => res.status(404).json({ error: `${req.method} ${req.path} не найден` }));
app.use(errorHandler);

// Start server
(async () => {
  try {
    await sequelize.authenticate();
    console.log('БД подключена');
    await sequelize.sync({ alter: true });
    console.log('Модели синхронизированы');
    app.listen(PORT, () => {
      console.log(`AutoMarket API: http://localhost:${PORT}/api`);
    });
  } catch (err) {
    console.error('Ошибка запуска:', err);
    process.exit(1);
  }
})();

module.exports = app;
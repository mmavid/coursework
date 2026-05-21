const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3331;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Подключение к базе данных установлено');
    app.listen(PORT, () => {
      console.log(`Сервер запущен: http://localhost:${PORT}`);
      console.log(`API документация: http://localhost:${PORT}/api`);
    });
  } catch (err) {
    console.error('Ошибка запуска:', err);
    process.exit(1);
  }
};

start();
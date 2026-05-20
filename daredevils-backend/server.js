const app = require('./src/app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Подключение к базе данных установлено');

    await sequelize.sync({ alter: true });
    console.log('Таблицы синхронизированы');

    app.listen(PORT, () => {
      console.log(`Сервер запущен: http://localhost:${PORT}`);
      console.log(`Доступные эндпоинты:`);
      console.log(`/api/cars - автомобили`);
      console.log(`/api/users - пользователи`);
      console.log(`/api/services - услуги`);
      console.log(`/api/vacancies - вакансии`);
      console.log(`/api/call-requests - заявки на звонок`);
      console.log(`/api/test-drive-requests - тест-драйвы`);
      console.log(`/api/credit-requests - кредиты`);
      console.log(`/api/trade-in-requests - трейд-ин`);
      console.log(`/api/service-requests - запись на сервис`);
      console.log(`/api/job-applications - отклики на вакансии`);
      console.log(`/api/partnership-requests - партнёрство`);
    });
  } catch (err) {
    console.error('Ошибка запуска:', err);
    process.exit(1);
  }
};

start();
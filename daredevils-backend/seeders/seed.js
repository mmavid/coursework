const { sequelize, User, Car, Service, Vacancy, CallRequest, TestDriveRequest, CreditRequest, TradeInRequest, ServiceRequest, JobApplication, PartnershipRequest } = require('../models');

const seed = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('БД пересоздана');

    // ── Users (20 уникальных пользователей) ─────────────────────────
    const users = await User.bulkCreate([
      { name: 'Алексей Петров', email: 'alex.petrov@auto.ru', phone: '+7 900 111-11-11', role: 'admin' },
      { name: 'Мария Иванова', email: 'maria.ivanova@auto.ru', phone: '+7 900 222-22-22', role: 'manager' },
      { name: 'Дмитрий Сидоров', email: 'dmitry.sidorov@auto.ru', phone: '+7 900 333-33-33', role: 'manager' },
      { name: 'Елена Кузнецова', email: 'elena.kuznetsova@gmail.com', phone: '+7 901 444-44-44', role: 'client' },
      { name: 'Сергей Васильев', email: 'sergey.vasiliev@mail.ru', phone: '+7 902 555-55-55', role: 'client' },
      { name: 'Анна Смирнова', email: 'anna.smirnova@yandex.ru', phone: '+7 903 666-66-66', role: 'client' },
      { name: 'Михаил Козлов', email: 'mikhail.kozlov@bk.ru', phone: '+7 904 777-77-77', role: 'client' },
      { name: 'Ольга Новикова', email: 'olga.novikova@gmail.com', phone: '+7 905 888-88-88', role: 'client' },
      { name: 'Иван Морозов', email: 'ivan.morozov@mail.ru', phone: '+7 906 999-99-99', role: 'client' },
      { name: 'Татьяна Волкова', email: 'tatiana.volkova@yandex.ru', phone: '+7 907 111-22-33', role: 'client' },
      { name: 'Павел Соколов', email: 'pavel.sokolov@bk.ru', phone: '+7 908 222-33-44', role: 'manager' },
      { name: 'Наталья Лебедева', email: 'natalia.lebedeva@gmail.com', phone: '+7 909 333-44-55', role: 'client' },
      { name: 'Андрей Попов', email: 'andrey.popov@mail.ru', phone: '+7 910 444-55-66', role: 'client' },
      { name: 'Екатерина Зайцева', email: 'ekaterina.zaytseva@yandex.ru', phone: '+7 911 555-66-77', role: 'client' },
      { name: 'Владимир Орлов', email: 'vladimir.orlov@bk.ru', phone: '+7 912 666-77-88', role: 'client' },
      { name: 'Юлия Соловьева', email: 'julia.solovieva@gmail.com', phone: '+7 913 777-88-99', role: 'client' },
      { name: 'Антон Никитин', email: 'anton.nikitin@mail.ru', phone: '+7 914 888-99-00', role: 'manager' },
      { name: 'Ирина Федорова', email: 'irina.fedorova@yandex.ru', phone: '+7 915 999-00-11', role: 'client' },
      { name: 'Максим Егоров', email: 'maxim.egorov@bk.ru', phone: '+7 916 000-11-22', role: 'client' },
      { name: 'Ксения Павлова', email: 'kseniya.pavlova@gmail.com', phone: '+7 917 111-22-33', role: 'client' }
    ]);
    console.log(`Users: ${users.length} записей`);

    // ── Cars (40 автомобилей, включая 10 Mercedes) ───────────────────
    const cars = await Car.bulkCreate([
      // Mercedes-Benz (10 машин)
      { brand: 'Mercedes-Benz', model: 'E 300', year: 2024, price: 7200000, mileage: 0, engine: '2.0L Бензин', power: 258, transmission: 'Автомат', drive: 'RWD', bodyType: 'Седан', color: 'Чёрный', isNew: true, status: 'available', imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800', vin: 'W1KZF8EB0LB123456' },
      { brand: 'Mercedes-Benz', model: 'S 500', year: 2024, price: 14500000, mileage: 0, engine: '3.0L Бензин', power: 435, transmission: 'Автомат', drive: 'AWD', bodyType: 'Седан', color: 'Белый', isNew: true, status: 'available', vin: 'W1KZF8EB1LB123457' },
      { brand: 'Mercedes-Benz', model: 'GLE 450', year: 2024, price: 9800000, mileage: 0, engine: '3.0L Бензин', power: 367, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Синий', isNew: true, status: 'available', vin: 'W1KZF8EB2LB123458' },
      { brand: 'Mercedes-Benz', model: 'GLS 600', year: 2024, price: 18500000, mileage: 0, engine: '4.0L Бензин', power: 558, transmission: 'Автомат', drive: 'AWD', bodyType: 'Внедорожник', color: 'Чёрный', isNew: true, status: 'reserved', vin: 'W1KZF8EB3LB123459' },
      { brand: 'Mercedes-Benz', model: 'C 300', year: 2023, price: 5200000, mileage: 15000, engine: '2.0L Бензин', power: 258, transmission: 'Автомат', drive: 'RWD', bodyType: 'Седан', color: 'Серебристый', isNew: false, status: 'available', vin: 'W1KZF8EB4LB123460' },
      { brand: 'Mercedes-Benz', model: 'E 220d', year: 2022, price: 5800000, mileage: 35000, engine: '2.0L Дизель', power: 194, transmission: 'Автомат', drive: 'RWD', bodyType: 'Седан', color: 'Тёмно-синий', isNew: false, status: 'available', vin: 'W1KZF8EB5LB123461' },
      { brand: 'Mercedes-Benz', model: 'GLC 300', year: 2023, price: 6200000, mileage: 12000, engine: '2.0L Бензин', power: 258, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Белый', isNew: false, status: 'available', vin: 'W1KZF8EB6LB123462' },
      { brand: 'Mercedes-Benz', model: 'CLA 250', year: 2023, price: 4100000, mileage: 20000, engine: '2.0L Бензин', power: 224, transmission: 'Автомат', drive: 'FWD', bodyType: 'Седан', color: 'Красный', isNew: false, status: 'available', vin: 'W1KZF8EB7LB123463' },
      { brand: 'Mercedes-Benz', model: 'AMG GT 53', year: 2022, price: 12500000, mileage: 18000, engine: '3.0L Бензин', power: 435, transmission: 'Автомат', drive: 'AWD', bodyType: 'Купе', color: 'Зелёный', isNew: false, status: 'available', vin: 'W1KZF8EB8LB123464' },
      { brand: 'Mercedes-Benz', model: 'V-Class', year: 2023, price: 6800000, mileage: 25000, engine: '2.0L Дизель', power: 190, transmission: 'Автомат', drive: 'FWD', bodyType: 'Минивэн', color: 'Чёрный', isNew: false, status: 'available', vin: 'W1KZF8EB9LB123465' },
      
      // BMW (5 машин)
      { brand: 'BMW', model: 'X5 M60i', year: 2024, price: 11200000, mileage: 0, engine: '4.4L Бензин', power: 530, transmission: 'Автомат', drive: 'AWD', bodyType: 'Внедорожник', color: 'Чёрный', isNew: true, status: 'available', vin: 'WBA1F5C34L5B12345' },
      { brand: 'BMW', model: 'M4 Competition', year: 2024, price: 9200000, mileage: 0, engine: '3.0L Бензин', power: 510, transmission: 'Автомат', drive: 'AWD', bodyType: 'Купе', color: 'Белый', isNew: true, status: 'available', vin: 'WBA1F5C35L5B12346' },
      { brand: 'BMW', model: 'X3 xDrive30i', year: 2023, price: 5200000, mileage: 18000, engine: '2.0L Бензин', power: 245, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Серый', isNew: false, status: 'available', vin: 'WBA1F5C36L5B12347' },
      { brand: 'BMW', model: '540i xDrive', year: 2022, price: 6200000, mileage: 28000, engine: '3.0L Бензин', power: 333, transmission: 'Автомат', drive: 'AWD', bodyType: 'Седан', color: 'Синий', isNew: false, status: 'available', vin: 'WBA1F5C37L5B12348' },
      { brand: 'BMW', model: 'iX xDrive50', year: 2023, price: 8900000, mileage: 8000, engine: 'Электро', power: 523, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Бронзовый', isNew: false, status: 'available', vin: 'WBA1F5C38L5B12349' },
      
      // Audi (4 машины)
      { brand: 'Audi', model: 'Q8 55 TFSI', year: 2024, price: 8500000, mileage: 0, engine: '3.0L Бензин', power: 340, transmission: 'Автомат', drive: 'AWD', bodyType: 'Внедорожник', color: 'Чёрный', isNew: true, status: 'available', vin: 'WAU1A4CD0LA123456' },
      { brand: 'Audi', model: 'RS7 Sportback', year: 2023, price: 11500000, mileage: 12000, engine: '4.0L Бензин', power: 600, transmission: 'Автомат', drive: 'AWD', bodyType: 'Седан', color: 'Серый', isNew: false, status: 'available', vin: 'WAU1A4CD1LA123457' },
      { brand: 'Audi', model: 'e-tron GT', year: 2023, price: 9800000, mileage: 15000, engine: 'Электро', power: 598, transmission: 'Автомат', drive: 'AWD', bodyType: 'Седан', color: 'Белый', isNew: false, status: 'available', vin: 'WAU1A4CD2LA123458' },
      { brand: 'Audi', model: 'Q5 Sportback', year: 2023, price: 5100000, mileage: 22000, engine: '2.0L Бензин', power: 245, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Зелёный', isNew: false, status: 'reserved', vin: 'WAU1A4CD3LA123459' },
      
      // Toyota (5 машин)
      { brand: 'Toyota', model: 'Camry 3.5 V6', year: 2024, price: 3800000, mileage: 0, engine: '3.5L Бензин', power: 249, transmission: 'Автомат', drive: 'FWD', bodyType: 'Седан', color: 'Белый', isNew: true, status: 'available', vin: 'JT1A1B12C3L123456' },
      { brand: 'Toyota', model: 'RAV4 Adventure', year: 2024, price: 4100000, mileage: 0, engine: '2.5L Бензин', power: 200, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Красный', isNew: true, status: 'available', vin: 'JT1A1B12C4L123457' },
      { brand: 'Toyota', model: 'Land Cruiser 300', year: 2023, price: 11500000, mileage: 25000, engine: '3.5L Бензин', power: 415, transmission: 'Автомат', drive: '4WD', bodyType: 'Внедорожник', color: 'Бежевый', isNew: false, status: 'available', vin: 'JT1A1B12C5L123458' },
      { brand: 'Toyota', model: 'Highlander', year: 2022, price: 5100000, mileage: 38000, engine: '3.5L Бензин', power: 249, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Серебристый', isNew: false, status: 'available', vin: 'JT1A1B12C6L123459' },
      { brand: 'Toyota', model: 'Corolla Cross', year: 2023, price: 2900000, mileage: 18000, engine: '1.8L Бензин', power: 140, transmission: 'Вариатор', drive: 'FWD', bodyType: 'Кроссовер', color: 'Синий', isNew: false, status: 'available', vin: 'JT1A1B12C7L123460' },
      
      // Lexus (3 машины)
      { brand: 'Lexus', model: 'RX 500h', year: 2024, price: 8900000, mileage: 0, engine: '2.4L Гибрид', power: 371, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Белый', isNew: true, status: 'available', vin: 'JT1A1B12C8L123461' },
      { brand: 'Lexus', model: 'ES 300h', year: 2023, price: 5300000, mileage: 12000, engine: '2.5L Гибрид', power: 218, transmission: 'Вариатор', drive: 'FWD', bodyType: 'Седан', color: 'Чёрный', isNew: false, status: 'available', vin: 'JT1A1B12C9L123462' },
      { brand: 'Lexus', model: 'NX 350h', year: 2023, price: 4800000, mileage: 20000, engine: '2.5L Гибрид', power: 242, transmission: 'Вариатор', drive: 'AWD', bodyType: 'Кроссовер', color: 'Красный', isNew: false, status: 'available', vin: 'JT1A1B12D0L123463' },
      
      // Volkswagen (3 машины)
      { brand: 'Volkswagen', model: 'Touareg R', year: 2024, price: 7500000, mileage: 0, engine: '3.0L Гибрид', power: 462, transmission: 'Автомат', drive: 'AWD', bodyType: 'Внедорожник', color: 'Тёмно-синий', isNew: true, status: 'available', vin: 'WV1A1B12C1L123464' },
      { brand: 'Volkswagen', model: 'ID.4', year: 2023, price: 4100000, mileage: 15000, engine: 'Электро', power: 201, transmission: 'Автомат', drive: 'RWD', bodyType: 'Кроссовер', color: 'Серый', isNew: false, status: 'available', vin: 'WV1A1B12C2L123465' },
      { brand: 'Volkswagen', model: 'Passat CC', year: 2022, price: 2800000, mileage: 42000, engine: '2.0L Бензин', power: 190, transmission: 'Автомат', drive: 'FWD', bodyType: 'Седан', color: 'Чёрный', isNew: false, status: 'available', vin: 'WV1A1B12C3L123466' },
      
      // Kia (3 машины)
      { brand: 'Kia', model: 'Sorento Premium', year: 2024, price: 4300000, mileage: 0, engine: '2.5L Бензин', power: 194, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Белый', isNew: true, status: 'available', vin: 'KNA1A1B12C1L123467' },
      { brand: 'Kia', model: 'EV6 GT', year: 2023, price: 6200000, mileage: 10000, engine: 'Электро', power: 585, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Оранжевый', isNew: false, status: 'available', vin: 'KNA1A1B12C2L123468' },
      { brand: 'Kia', model: 'Ceed SW', year: 2023, price: 2400000, mileage: 28000, engine: '1.6L Бензин', power: 123, transmission: 'Механика', drive: 'FWD', bodyType: 'Универсал', color: 'Синий', isNew: false, status: 'available', vin: 'KNA1A1B12C3L123469' },
      
      // Hyundai (3 машины)
      { brand: 'Hyundai', model: 'Santa Fe Hybrid', year: 2024, price: 5200000, mileage: 0, engine: '1.6L Гибрид', power: 230, transmission: 'Автомат', drive: 'AWD', bodyType: 'Кроссовер', color: 'Тёмно-серый', isNew: true, status: 'available', vin: 'KMH1A1B12C1L123470' },
      { brand: 'Hyundai', model: 'IONIQ 6', year: 2023, price: 4900000, mileage: 8000, engine: 'Электро', power: 320, transmission: 'Автомат', drive: 'RWD', bodyType: 'Седан', color: 'Белый', isNew: false, status: 'available', vin: 'KMH1A1B12C2L123471' },
      { brand: 'Hyundai', model: 'Palisade', year: 2022, price: 5300000, mileage: 35000, engine: '3.8L Бензин', power: 295, transmission: 'Автомат', drive: 'AWD', bodyType: 'Внедорожник', color: 'Чёрный', isNew: false, status: 'available', vin: 'KMH1A1B12C3L123472' },
      
      // Porsche (2 машины)
      { brand: 'Porsche', model: 'Cayenne Turbo GT', year: 2024, price: 16800000, mileage: 0, engine: '4.0L Бензин', power: 640, transmission: 'Автомат', drive: 'AWD', bodyType: 'Внедорожник', color: 'Зелёный', isNew: true, status: 'available', vin: 'WP1A1A1B1C1L123473' },
      { brand: 'Porsche', model: 'Taycan Turbo S', year: 2023, price: 15200000, mileage: 5000, engine: 'Электро', power: 761, transmission: 'Автомат', drive: 'AWD', bodyType: 'Седан', color: 'Синий', isNew: false, status: 'available', vin: 'WP1A1A1B2C1L123474' }
    ]);
    console.log(`Cars: ${cars.length} записей (включая 10 Mercedes)`);

    // ── Services (15 услуг) ─────────────────────────────────────────
    const services = await Service.bulkCreate([
      { name: 'ТО-1 (Замена масла и фильтров)', category: 'maintenance', price: 8500, duration: 90, isActive: true },
      { name: 'ТО-2 (Расширенное обслуживание)', category: 'maintenance', price: 18500, duration: 180, isActive: true },
      { name: 'ТО-3 (Полное обслуживание)', category: 'maintenance', price: 32500, duration: 300, isActive: true },
      { name: 'Компьютерная диагностика двигателя', category: 'diagnostics', price: 3500, duration: 60, isActive: true },
      { name: 'Полная компьютерная диагностика', category: 'diagnostics', price: 6500, duration: 120, isActive: true },
      { name: 'Сезонная замена шин с хранением', category: 'tires', price: 5500, duration: 90, isActive: true },
      { name: 'Шиномонтаж с балансировкой', category: 'tires', price: 4200, duration: 60, isActive: true },
      { name: 'Локальный кузовной ремонт', category: 'bodywork', price: 12500, duration: 480, isActive: true },
      { name: 'Покраска кузовного элемента', category: 'bodywork', price: 28000, duration: 1440, isActive: true },
      { name: 'Замена тормозных дисков и колодок', category: 'repair', price: 8500, duration: 180, isActive: true },
      { name: 'Замена ремня ГРМ с роликами', category: 'repair', price: 15500, duration: 300, isActive: true },
      { name: 'Регулировка развал-схождения', category: 'repair', price: 3800, duration: 90, isActive: true },
      { name: 'Чистка инжектора и форсунок', category: 'maintenance', price: 6800, duration: 150, isActive: true },
      { name: 'Заправка и чистка кондиционера', category: 'other', price: 4200, duration: 60, isActive: true },
      { name: 'Полировка кузова', category: 'bodywork', price: 12500, duration: 360, isActive: true }
    ]);
    console.log(`Services: ${services.length} записей`);

    // ── Vacancies (10 вакансий) ─────────────────────────────────────
    const vacancies = await Vacancy.bulkCreate([
      { title: 'Менеджер по продажам автомобилей', department: 'Отдел продаж', salaryFrom: 90000, salaryTo: 250000, schedule: 'full', description: 'Активные продажи, консультирование клиентов, демонстрация автомобилей. Опыт в автосалоне от 1 года.', isActive: true },
      { title: 'Старший менеджер по продажам', department: 'Отдел продаж', salaryFrom: 150000, salaryTo: 400000, schedule: 'full', description: 'Управление командой из 5+ человек, выполнение планов продаж.', isActive: true },
      { title: 'Ведущий автомеханик', department: 'Сервисный центр', salaryFrom: 100000, salaryTo: 180000, schedule: 'shift', description: 'Диагностика сложных неисправностей, ремонт Mercedes/BMW/Audi.', isActive: true },
      { title: 'Специалист по автокредитованию', department: 'Финансовый отдел', salaryFrom: 70000, salaryTo: 130000, schedule: 'full', description: 'Оформление кредитов и страховок, работа с банками.', isActive: true },
      { title: 'Сервис-консультант', department: 'Сервисный центр', salaryFrom: 65000, salaryTo: 110000, schedule: 'full', description: 'Приём клиентов, оценка стоимости ремонта, выдача автомобилей.', isActive: true },
      { title: 'Оценщик трейд-ин', department: 'Отдел продаж', salaryFrom: 85000, salaryTo: 160000, schedule: 'full', description: 'Оценка автомобилей, знание рынка, работа с документами.', isActive: true },
      { title: 'Администратор автосалона', department: 'Администрация', salaryFrom: 55000, salaryTo: 80000, schedule: 'full', description: 'Встреча клиентов, работа с документацией, приём звонков.', isActive: true },
      { title: 'Маркетолог-аналитик', department: 'Маркетинг', salaryFrom: 90000, salaryTo: 150000, schedule: 'full', description: 'Digital-маркетинг, аналитика рекламных кампаний, SMM.', isActive: true },
      { title: 'Специалист по запчастям', department: 'Склад', salaryFrom: 60000, salaryTo: 90000, schedule: 'full', description: 'Заказ и подбор запчастей, работа с поставщиками.', isActive: true },
      { title: 'Мойщик-подготовщик автомобилей', department: 'Подготовка', salaryFrom: 45000, salaryTo: 65000, schedule: 'shift', description: 'Мойка, чистка салона, подготовка авто к выдаче.', isActive: true }
    ]);
    console.log(`Vacancies: ${vacancies.length} записей`);

    // ── CallRequests (15 заявок с разными данными) ───────────────────
    const callNames = ['Иван', 'Мария', 'Дмитрий', 'Анна', 'Сергей', 'Елена', 'Алексей', 'Татьяна', 'Андрей', 'Ольга', 'Павел', 'Наталья', 'Владимир', 'Юлия', 'Максим'];
    const callSubjects = ['Интересует Mercedes E-класса', 'Хочу записаться на тест-драйв BMW', 'Вопрос по Trade-in', 'Условия автокредита', 'Срочный звонок по поводу Audi', 'Консультация по сервису', 'Покупка в кредит'];
    
    for (let i = 0; i < 15; i++) {
      const randomCar = cars[Math.floor(Math.random() * cars.length)];
      await CallRequest.create({
        name: `${callNames[i]} ${['Петров', 'Сидоров', 'Козлов', 'Морозов', 'Волков'][Math.floor(Math.random() * 5)]}`,
        phone: `+7 9${Math.floor(10 + Math.random() * 99)} ${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(10 + Math.random() * 90)}`,
        preferTime: ['10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'][Math.floor(Math.random() * 5)],
        subject: callSubjects[Math.floor(Math.random() * callSubjects.length)],
        carId: randomCar.id,
        status: ['new', 'in_progress', 'done', 'cancelled'][Math.floor(Math.random() * 4)],
        managerNote: Math.random() > 0.7 ? `Клиент перезвонит через ${Math.floor(1 + Math.random() * 3)} дня` : null
      });
    }

    // ── TestDriveRequests (20 заявок) ───────────────────────────────
    const testNames = ['Алексей Петров', 'Мария Иванова', 'Дмитрий Соколов', 'Анна Кузнецова', 'Сергей Волков', 'Елена Морозова', 'Иван Смирнов', 'Татьяна Лебедева'];
    const testDriveStatuses = ['new', 'confirmed', 'completed', 'cancelled'];
    const testDates = ['2026-06-15', '2026-06-16', '2026-06-17', '2026-06-18', '2026-06-19', '2026-06-20', '2026-06-21', '2026-06-22'];
    
    for (let i = 0; i < 20; i++) {
      const randomCar = cars[Math.floor(Math.random() * cars.length)];
      await TestDriveRequest.create({
        name: testNames[Math.floor(Math.random() * testNames.length)],
        phone: `+7 9${Math.floor(10 + Math.random() * 99)} ${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(10 + Math.random() * 90)}`,
        email: `td${i + 1}@example.com`,
        carId: randomCar.id,
        preferDate: testDates[Math.floor(Math.random() * testDates.length)],
        preferTime: `${Math.floor(10 + Math.random() * 8)}:${Math.floor(0 + Math.random() * 3) * 30}`,
        hasLicense: Math.random() > 0.15,
        status: testDriveStatuses[Math.floor(Math.random() * testDriveStatuses.length)],
        managerNote: Math.random() > 0.8 ? 'Подтверждено' : null
      });
    }

    // ── CreditRequests (15 заявок с разными суммами) ─────────────────
    const creditNames = ['Алексей', 'Михаил', 'Андрей', 'Владимир', 'Дмитрий', 'Сергей', 'Павел', 'Максим'];
    const employmentTypes = ['employee', 'selfemployed', 'business', 'retired'];
    for (let i = 0; i < 15; i++) {
      const randomCar = cars[Math.floor(Math.random() * cars.length)];
      const priceNum = parseFloat(randomCar.price);
      const initialPayment = Math.round((priceNum * (0.1 + Math.random() * 0.35)) / 1000) * 1000;
      await CreditRequest.create({
        name: `${creditNames[Math.floor(Math.random() * creditNames.length)]} ${['Петров', 'Сидоров', 'Козлов', 'Новиков', 'Федоров'][Math.floor(Math.random() * 5)]}`,
        phone: `+7 9${Math.floor(10 + Math.random() * 99)} ${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(10 + Math.random() * 90)}`,
        email: `credit${i + 1}@mail.ru`,
        carId: randomCar.id,
        initialPayment: initialPayment,
        termMonths: [24, 36, 48, 60, 72][Math.floor(Math.random() * 5)],
        monthlyIncome: Math.round((50000 + Math.random() * 300000) / 1000) * 1000,
        employmentType: employmentTypes[Math.floor(Math.random() * employmentTypes.length)],
        status: ['new', 'reviewing', 'approved', 'rejected', 'cancelled'][Math.floor(Math.random() * 5)],
        approvedAmount: Math.random() > 0.6 ? Math.round((priceNum - initialPayment) / 1000) * 1000 : null,
        managerNote: Math.random() > 0.7 ? 'Требуется справка 2-НДФЛ' : null
      });
    }

    // ── TradeInRequests (12 заявок) ─────────────────────────────────
    const tradeBrands = ['Toyota', 'Hyundai', 'Kia', 'Nissan', 'Volkswagen', 'Ford', 'Chevrolet', 'Mazda', 'Honda', 'Renault'];
    const tradeModels = {
      Toyota: ['Camry', 'Corolla', 'RAV4', 'Land Cruiser'],
      Hyundai: ['Solaris', 'Elantra', 'Tucson', 'Santa Fe'],
      Kia: ['Rio', 'Cerato', 'Sportage', 'Sorento'],
      Nissan: ['Qashqai', 'X-Trail', 'Juke', 'Teana'],
      Volkswagen: ['Polo', 'Jetta', 'Tiguan', 'Passat']
    };
    const conditions = ['excellent', 'good', 'fair', 'poor'];
    
    for (let i = 0; i < 12; i++) {
      const targetCar = cars[Math.floor(Math.random() * cars.length)];
      const brand = tradeBrands[Math.floor(Math.random() * tradeBrands.length)];
      const modelList = tradeModels[brand] || ['Model'];
      const year = 2014 + Math.floor(Math.random() * 9);
      const mileage = Math.floor(50000 + Math.random() * 120000);
      const condition = conditions[Math.floor(Math.random() * conditions.length)];
      
      let estimatedValue = 0;
      if (condition === 'excellent') estimatedValue = 1500000 - (2024 - year) * 80000;
      else if (condition === 'good') estimatedValue = 1200000 - (2024 - year) * 70000;
      else if (condition === 'fair') estimatedValue = 900000 - (2024 - year) * 60000;
      else estimatedValue = 500000 - (2024 - year) * 50000;
      estimatedValue = Math.max(100000, Math.round(estimatedValue / 1000) * 1000);
      
      await TradeInRequest.create({
        name: `${['Пётр', 'Иван', 'Анна', 'Дмитрий', 'Ольга'][Math.floor(Math.random() * 5)]} ${['Козлов', 'Смирнов', 'Морозова', 'Новиков', 'Соколова'][Math.floor(Math.random() * 5)]}`,
        phone: `+7 9${Math.floor(10 + Math.random() * 99)} ${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(10 + Math.random() * 90)}`,
        email: `tradein${i + 1}@gmail.com`,
        clientBrand: brand,
        clientModel: modelList[Math.floor(Math.random() * modelList.length)],
        clientYear: year,
        clientMileage: mileage,
        clientCondition: condition,
        targetCarId: targetCar.id,
        estimatedValue: estimatedValue,
        status: ['new', 'evaluating', 'offer_sent', 'accepted', 'rejected', 'cancelled'][Math.floor(Math.random() * 6)]
      });
    }

    // ── ServiceRequests (25 записей) ────────────────────────────────
    const serviceCarBrands = ['Mercedes-Benz', 'BMW', 'Audi', 'Toyota', 'Volkswagen', 'Kia', 'Hyundai', 'Nissan'];
    const serviceCarModels = {
      'Mercedes-Benz': ['E-Class', 'C-Class', 'GLC', 'S-Class'],
      'BMW': ['X5', '3 Series', '5 Series', 'X3'],
      'Audi': ['A6', 'Q5', 'A4', 'Q7'],
      'Toyota': ['Camry', 'RAV4', 'Corolla', 'Land Cruiser'],
      'Volkswagen': ['Tiguan', 'Passat', 'Golf', 'Touareg']
    };
    const serviceProblems = ['Проверить подвеску', 'Замена масла', 'Стук при повороте', 'Не работает кондиционер', 'Требуется ТО', 'Горит Check Engine', 'Скрипят тормоза'];
    
    for (let i = 0; i < 25; i++) {
      const brand = serviceCarBrands[Math.floor(Math.random() * serviceCarBrands.length)];
      const modelList = serviceCarModels[brand] || ['Model'];
      const randomService = services[Math.floor(Math.random() * services.length)];
      
      await ServiceRequest.create({
        name: `Клиент ${i + 1}`,
        phone: `+7 9${Math.floor(10 + Math.random() * 99)} ${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(10 + Math.random() * 90)}`,
        email: `service${i + 1}@auto.ru`,
        serviceId: randomService.id,
        carBrand: brand,
        carModel: modelList[Math.floor(Math.random() * modelList.length)],
        carYear: 2016 + Math.floor(Math.random() * 8),
        carMileage: Math.floor(30000 + Math.random() * 130000),
        description: serviceProblems[Math.floor(Math.random() * serviceProblems.length)],
        preferDate: `2026-07-${Math.floor(1 + Math.random() * 30)}`,
        preferTime: `${Math.floor(9 + Math.random() * 8)}:00`,
        status: ['new', 'confirmed', 'in_work', 'done', 'cancelled'][Math.floor(Math.random() * 5)],
        totalCost: randomService.price ? Math.round(randomService.price * (0.8 + Math.random() * 0.6)) : null
      });
    }

    // ── JobApplications (15 откликов) ───────────────────────────────
    const applicantNames = [
      'Иван Петров', 'Анна Сидорова', 'Дмитрий Козлов', 'Елена Новикова', 'Сергей Морозов',
      'Ольга Волкова', 'Алексей Соколов', 'Мария Лебедева', 'Павел Федоров', 'Наталья Егорова'
    ];
    const jobStatuses = ['new', 'reviewing', 'interview', 'offer', 'rejected'];
    
    for (let i = 0; i < 15; i++) {
      const randomVacancy = vacancies[Math.floor(Math.random() * vacancies.length)];
      const experience = Math.floor(1 + Math.random() * 15);
      
      await JobApplication.create({
        vacancyId: randomVacancy.id,
        name: applicantNames[Math.floor(Math.random() * applicantNames.length)],
        email: `job${i + 1}@mail.com`,
        phone: `+7 9${Math.floor(10 + Math.random() * 99)} ${Math.floor(100 + Math.random() * 900)}-${Math.floor(10 + Math.random() * 90)}-${Math.floor(10 + Math.random() * 90)}`,
        experience: experience,
        coverLetter: `Имею опыт работы ${experience} лет в сфере ${randomVacancy.department}. Ответственный, коммуникабельный, целеустремлённый.${Math.random() > 0.5 ? ' Готов приступить к работе в ближайшее время.' : ''}`,
        resumeUrl: Math.random() > 0.5 ? `https://resume.example.com/${i + 1}.pdf` : null,
        status: jobStatuses[Math.floor(Math.random() * jobStatuses.length)],
        managerNote: Math.random() > 0.85 ? 'Пригласить на собеседование' : null
      });
    }

    // ── PartnershipRequests (12 заявок) ──────────────────────────────
    const partnerships = [
      { company: 'РЕСО-Гарантия', type: 'insurance', desc: 'Страхование для автодилеров' },
      { company: 'ВТБ Банк', type: 'bank', desc: 'Партнёрская программа кредитования' },
      { company: 'Газпромнефть', type: 'service_partner', desc: 'Топливные карты для клиентов' },
      { company: '2ГИС', type: 'media', desc: 'Размещение на картах' },
      { company: 'Автотека', type: 'other', desc: 'Проверка истории автомобилей' },
      { company: 'Bosch', type: 'supplier', desc: 'Поставка оборудования для сервиса' },
      { company: 'Яндекс Go', type: 'other', desc: 'Корпоративные поездки' },
      { company: 'Michelin', type: 'supplier', desc: 'Поставка шин премиум-класса' },
      { company: 'Росгосстрах', type: 'insurance', desc: 'Страховые продукты' },
      { company: 'Открытие Банк', type: 'bank', desc: 'Автокредиты и вклады' },
      { company: 'AliExpress', type: 'supplier', desc: 'Аксессуары для авто' },
      { company: 'Drive2', type: 'media', desc: 'Реклама на автомобильном портале' }
    ];
    
    for (let i = 0; i < partnerships.length; i++) {
      await PartnershipRequest.create({
        companyName: partnerships[i].company,
        contactName: `${['Иван', 'Петр', 'Сергей', 'Анна', 'Елена'][Math.floor(Math.random() * 5)]} ${['Иванов', 'Петров', 'Сергеев', 'Смирнова', 'Кузнецова'][Math.floor(Math.random() * 5)]}`,
        email: `partner${i + 1}@${partnerships[i].company.toLowerCase().replace(/[^a-z]/g, '')}.ru`,
        phone: `+7 495 ${Math.floor(100 + Math.random() * 899)}-${Math.floor(10 + Math.random() * 89)}-${Math.floor(10 + Math.random() * 89)}`,
        website: `https://${partnerships[i].company.toLowerCase().replace(/[^a-z]/g, '')}.ru`,
        type: partnerships[i].type,
        description: partnerships[i].desc,
        status: ['new', 'reviewing', 'negotiation', 'approved', 'rejected'][Math.floor(Math.random() * 5)]
      });
    }

    console.log('\nБД успешно заполнена разнообразными тестовыми данными!');
    console.log('Статистика:');
    console.log(`Пользователи: ${users.length}`);
    console.log(`Автомобили: ${cars.length} (Mercedes: 10 шт.)`);
    console.log(`Услуги: ${services.length}`);
    console.log(`Вакансии: ${vacancies.length}`);
    console.log(`Заявки на звонок: 15`);
    console.log(`Заявки на тест-драйв: 20`);
    console.log(`Кредитные заявки: 15`);
    console.log(`Заявки трейд-ин: 12`);
    console.log(`Записи на сервис: 25`);
    console.log(`Отклики на вакансии: 15`);
    console.log(`Партнёрские заявки: ${partnerships.length}`);
    console.log('\nГотово!');
    
    process.exit(0);
  } catch (err) {
    console.error('Ошибка seed:', err);
    process.exit(1);
  }
};

seed();
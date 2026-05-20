// src/config/seed.js
const {
  sequelize, User, Car, Service, Vacancy,
  CallRequest, TestDriveRequest, CreditRequest,
  TradeInRequest, ServiceRequest, JobApplication, PartnershipRequest,
} = require('../models');

const seed = async () => {
  await sequelize.sync({ force: true });
  console.log('✅ БД пересоздана');

  // ── Users ────────────────────────────────────────────────────
  await User.bulkCreate([
    { name: 'Алексей Петров',  email: 'alex@auto.ru',    phone: '+7 900 111-11-11', role: 'client'  },
    { name: 'Мария Иванова',   email: 'maria@auto.ru',   phone: '+7 900 222-22-22', role: 'manager' },
    { name: 'Дмитрий Сидоров', email: 'dima@auto.ru',    phone: '+7 900 333-33-33', role: 'admin'   },
    { name: 'Елена Кузнецова', email: 'elena@gmail.com', phone: '+7 901 444-44-44', role: 'client'  },
  ]);

  // ── Cars ──────────────────────────────────────────────────────
  const cars = await Car.bulkCreate([
    { brand:'Toyota', model:'Camry',    year:2023, price:2950000, mileage:0,     engine:'2.5L Бензин', power:200, transmission:'Автомат', drive:'FWD', bodyType:'Седан',      color:'Белый',     isNew:true,  status:'available', imageUrl:'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800' },
    { brand:'BMW',    model:'X5',       year:2022, price:6800000, mileage:28000, engine:'3.0L Дизель', power:249, transmission:'Автомат', drive:'AWD', bodyType:'Внедорожник',color:'Чёрный',    isNew:false, status:'available', imageUrl:'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800' },
    { brand:'Kia',    model:'Sportage', year:2023, price:3100000, mileage:0,     engine:'2.0L Бензин', power:150, transmission:'Автомат', drive:'AWD', bodyType:'Кроссовер',  color:'Серый',     isNew:true,  status:'available', imageUrl:'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800' },
    { brand:'Mercedes-Benz', model:'E-Class', year:2021, price:5200000, mileage:42000, engine:'2.0L Бензин', power:197, transmission:'Автомат', drive:'RWD', bodyType:'Седан', color:'Серебристый', isNew:false, status:'reserved', imageUrl:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800' },
    { brand:'Lada',   model:'Vesta',    year:2022, price:870000,  mileage:35000, engine:'1.8L Бензин', power:122, transmission:'Механика', drive:'FWD', bodyType:'Седан',      color:'Синий',     isNew:false, status:'available' },
    { brand:'Hyundai',model:'Tucson',   year:2023, price:3450000, mileage:0,     engine:'2.0L Бензин', power:150, transmission:'Автомат', drive:'AWD', bodyType:'Кроссовер',  color:'Красный',   isNew:true,  status:'available' },
  ]);

  // ── Services ──────────────────────────────────────────────────
  const services = await Service.bulkCreate([
    { name:'Техническое обслуживание (ТО-1)',  category:'maintenance', price:8500,  duration:120 },
    { name:'Техническое обслуживание (ТО-2)',  category:'maintenance', price:14000, duration:180 },
    { name:'Компьютерная диагностика',          category:'diagnostics', price:2500,  duration:60  },
    { name:'Замена шин (сезонная)',             category:'tires',       price:3200,  duration:45  },
    { name:'Кузовной ремонт (локальный)',        category:'bodywork',    price:null,  duration:null },
    { name:'Замена масла и фильтров',           category:'maintenance', price:4500,  duration:60  },
  ]);

  // ── Vacancies ─────────────────────────────────────────────────
  const vacancies = await Vacancy.bulkCreate([
    { title:'Менеджер по продажам автомобилей', department:'Отдел продаж',    salaryFrom:80000, salaryTo:200000, schedule:'full', description:'Работа с клиентами, презентация автомобилей, ведение сделок.' },
    { title:'Автомеханик',                      department:'Сервисный центр', salaryFrom:70000, salaryTo:120000, schedule:'shift', description:'Диагностика и ремонт автомобилей различных марок.' },
    { title:'Специалист по кредитованию',       department:'Финансовый отдел',salaryFrom:60000, salaryTo:100000, schedule:'full', description:'Оформление автокредитов, работа с банками-партнёрами.' },
  ]);

  // ── Requests ──────────────────────────────────────────────────
  await CallRequest.create({ name:'Иван Смирнов', phone:'+7 903 555-11-22', preferTime:'10:00–12:00', subject:'Интересует Toyota Camry', carId: cars[0].id });
  await TestDriveRequest.create({ name:'Елена Кузнецова', phone:'+7 901 444-44-44', email:'elena@gmail.com', carId: cars[2].id, preferDate:'2026-05-25', preferTime:'11:00' });
  await CreditRequest.create({ name:'Алексей Петров', phone:'+7 900 111-11-11', carId: cars[1].id, initialPayment:1500000, termMonths:60, monthlyIncome:150000, employmentType:'employee' });
  await TradeInRequest.create({ name:'Пётр Козлов', phone:'+7 905 777-88-99', clientBrand:'Nissan', clientModel:'Qashqai', clientYear:2018, clientMileage:95000, clientCondition:'good', targetCarId: cars[2].id, estimatedValue:1050000 });
  await ServiceRequest.create({ name:'Мария Иванова', phone:'+7 900 222-22-22', serviceId: services[0].id, carBrand:'Toyota', carModel:'Camry', carYear:2020, preferDate:'2026-05-28', preferTime:'09:00' });
  await JobApplication.create({ vacancyId: vacancies[0].id, name:'Сергей Волков', email:'sergey@mail.ru', phone:'+7 906 123-45-67', experience:3, coverLetter:'5 лет в продажах, последние 3 года в авторетейле.' });
  await PartnershipRequest.create({ companyName:'АльфаСтрахование', contactName:'Анна Белова', email:'partner@alfa.ru', phone:'+7 495 000-00-00', type:'insurance', description:'Предлагаем программы страхования КАСКО/ОСАГО для клиентов дилера.' });

  console.log('✅ Тестовые данные созданы');
  console.log(`   Авто: ${cars.length} | Услуги: ${services.length} | Вакансии: ${vacancies.length}`);
  console.log('   Заявки: CallRequest, TestDrive, Credit, TradeIn, Service, JobApp, Partnership');
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });

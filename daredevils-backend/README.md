# 🚗 AutoMarket API v2

Express · Sequelize · SQLite

## Структура проекта

```
src/
├── app.js
├── config/
│   ├── database.js
│   └── seed.js
├── models/
│   ├── index.js              ← ассоциации
│   ├── User.js
│   ├── Car.js
│   ├── Service.js
│   ├── Vacancy.js
│   ├── CallRequest.js        ← обратный звонок
│   ├── TestDriveRequest.js   ← запись на тест-драйв
│   ├── CreditRequest.js      ← заявка на кредит
│   ├── TradeInRequest.js     ← трейд-ин
│   ├── ServiceRequest.js     ← запись на сервис
│   ├── JobApplication.js     ← отклик на вакансию
│   └── PartnershipRequest.js ← запрос на партнёрство
├── controllers/
│   ├── carController.js
│   ├── userController.js
│   ├── tradeInController.js  ← авто-оценка авто клиента
│   └── requestController.js  ← фабрика CRUD для заявок
├── routes/
│   ├── _makeRequestRoutes.js ← фабрика роутов
│   ├── carRoutes.js
│   ├── userRoutes.js
│   ├── serviceRoutes.js
│   ├── vacancyRoutes.js
│   ├── callRequestRoutes.js
│   ├── testDriveRoutes.js
│   ├── creditRequestRoutes.js
│   ├── tradeInRoutes.js
│   ├── serviceRequestRoutes.js
│   ├── jobApplicationRoutes.js
│   └── partnershipRoutes.js
└── middleware/
    └── errorHandler.js
```

## Запуск

```bash
npm install
npm run seed    # создать БД и тестовые данные
npm run dev     # nodemon
npm start       # production
```

## API Endpoints

| Ресурс               | URL                          |
|----------------------|------------------------------|
| Автомобили           | `/api/cars`                  |
| Пользователи         | `/api/users`                 |
| Услуги               | `/api/services`              |
| Вакансии             | `/api/vacancies`             |
| Обратный звонок      | `/api/call-requests`         |
| Тест-драйв           | `/api/test-drive-requests`   |
| Кредит               | `/api/credit-requests`       |
| Трейд-ин             | `/api/trade-in-requests`     |
| Запись на сервис     | `/api/service-requests`      |
| Отклик на вакансию   | `/api/job-applications`      |
| Партнёрство          | `/api/partnership-requests`  |

### Общая схема роутов для заявок

```
GET    /api/{resource}            — список (?status= ?page= ?limit=)
GET    /api/{resource}/:id        — одна запись
POST   /api/{resource}            — создать
PATCH  /api/{resource}/:id/status — изменить статус + managerNote
PUT    /api/{resource}/:id        — полное обновление
DELETE /api/{resource}/:id        — удалить
```

### Статусы заявок

| Модель             | Статусы                                          |
|--------------------|--------------------------------------------------|
| CallRequest        | new → in_progress → done / cancelled             |
| TestDriveRequest   | new → confirmed → completed / cancelled          |
| CreditRequest      | new → reviewing → approved / rejected / cancelled|
| TradeInRequest     | new → evaluating → offer_sent → accepted/rejected|
| ServiceRequest     | new → confirmed → in_work → done / cancelled     |
| JobApplication     | new → reviewing → interview → offer / rejected   |
| PartnershipRequest | new → reviewing → negotiation → approved/rejected|

### Пример: создать заявку на тест-драйв

```http
POST /api/test-drive-requests
Content-Type: application/json

{
  "name": "Иван Иванов",
  "phone": "+7 900 123-45-67",
  "email": "ivan@mail.ru",
  "carId": 3,
  "preferDate": "2026-06-01",
  "preferTime": "12:00",
  "hasLicense": true
}
```

### Пример: трейд-ин (авто-оценка)

```http
POST /api/trade-in-requests
Content-Type: application/json

{
  "name": "Пётр Козлов",
  "phone": "+7 905 000-00-00",
  "clientBrand": "Ford",
  "clientModel": "Focus",
  "clientYear": 2019,
  "clientMileage": 78000,
  "clientCondition": "good",
  "targetCarId": 1
}
```
→ В ответе автоматически будет рассчитано поле `estimatedValue`.

### Пример: обновить статус заявки

```http
PATCH /api/credit-requests/1/status
Content-Type: application/json

{
  "status": "approved",
  "managerNote": "Одобрено банком ВТБ, ставка 12.5%"
}
```

## Связи между моделями

```
Car ──< TestDriveRequest
Car ──< CreditRequest
Car ──< CallRequest
Car ──< TradeInRequest (targetCar)
Service ──< ServiceRequest
Vacancy ──< JobApplication
```

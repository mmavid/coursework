// src/routes/_makeRequestRoutes.js
/**
 * Фабрика роутов для всех заявок.
 * GET  /           — список с фильтром ?status=
 * GET  /:id        — одна запись
 * POST /           — создать
 * PATCH /:id/status — обновить статус + managerNote
 * PUT  /:id        — полное обновление (для менеджера)
 * DELETE /:id      — удалить
 */
const makeRoutes = (ctrl) => {
  const router = require('express').Router();
  router.get('/',               ctrl.getAll);
  router.get('/:id',            ctrl.getById);
  router.post('/',              ctrl.create);
  router.patch('/:id/status',   ctrl.updateStatus);
  router.put('/:id',            ctrl.update);
  router.delete('/:id',         ctrl.remove);
  return router;
};

module.exports = makeRoutes;

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

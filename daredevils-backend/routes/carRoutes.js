const router = require('express').Router();
const ctrl   = require('../controllers/carController');

router.get('/stats', ctrl.getStats);
router.get('/',      ctrl.getAll);
router.get('/:id',   ctrl.getById);
router.post('/',     ctrl.create);
router.put('/:id',   ctrl.update);
router.delete('/:id',ctrl.remove);

module.exports = router;

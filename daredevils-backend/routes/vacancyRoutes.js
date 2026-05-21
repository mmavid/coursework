const router = require('express').Router();
const { Vacancy } = require('../models');

router.get('/', async (req,res) => {
  const { isActive = 'true' } = req.query;
  const where = {};
  if (isActive !== 'all') where.isActive = isActive === 'true';
  res.json(await Vacancy.findAll({ where, order: [['createdAt','DESC']] }));
});
router.get('/:id', async (req,res) => {
  const v = await Vacancy.findByPk(req.params.id);
  v ? res.json(v) : res.status(404).json({ error: 'Вакансия не найдена' });
});
router.post('/',    async (req,res) => { try { res.status(201).json(await Vacancy.create(req.body)); } catch(e){ res.status(500).json({error:e.message}); }});
router.put('/:id',  async (req,res) => { const v=await Vacancy.findByPk(req.params.id); if(!v) return res.status(404).json({error:'Не найдена'}); await v.update(req.body); res.json(v); });
router.delete('/:id', async (req,res) => { const v=await Vacancy.findByPk(req.params.id); if(!v) return res.status(404).json({error:'Не найдена'}); await v.destroy(); res.json({message:'Удалено'}); });

module.exports = router;

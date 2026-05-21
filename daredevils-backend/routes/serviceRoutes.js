const router = require('express').Router();
const { Service } = require('../models');

router.get('/', async (req,res) => {
  const { category, isActive = 'true' } = req.query;
  const where = {};
  if (category) where.category = category;
  if (isActive !== 'all') where.isActive = isActive === 'true';
  res.json(await Service.findAll({ where, order: [['category','ASC'],['name','ASC']] }));
});
router.get('/:id', async (req,res) => {
  const s = await Service.findByPk(req.params.id);
  s ? res.json(s) : res.status(404).json({ error: 'Услуга не найдена' });
});
router.post('/',    async (req,res) => { try { res.status(201).json(await Service.create(req.body)); } catch(e){ res.status(500).json({error:e.message}); }});
router.put('/:id',  async (req,res) => { const s=await Service.findByPk(req.params.id); if(!s) return res.status(404).json({error:'Не найдена'}); await s.update(req.body); res.json(s); });
router.delete('/:id', async (req,res) => { const s=await Service.findByPk(req.params.id); if(!s) return res.status(404).json({error:'Не найдена'}); await s.destroy(); res.json({message:'Удалено'}); });

module.exports = router;

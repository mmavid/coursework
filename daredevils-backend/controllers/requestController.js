// src/controllers/requestController.js
/**
 * Фабрика CRUD-контроллеров для всех таблиц-заявок.
 * Каждая заявка имеет: getAll (с фильтром status), getById, create, updateStatus, remove.
 */

const { Op } = require('sequelize');

const makeController = (Model, includes = []) => ({

  getAll: async (req, res) => {
    try {
      const { status, page = 1, limit = 20 } = req.query;
      const where = {};
      if (status) where.status = status;
      const offset = (Math.max(+page, 1) - 1) * +limit;
      const { count, rows } = await Model.findAndCountAll({
        where,
        include: includes,
        order: [['createdAt', 'DESC']],
        limit: +limit,
        offset,
      });
      res.json({ total: count, page: +page, pages: Math.ceil(count / +limit), data: rows });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const item = await Model.findByPk(req.params.id, { include: includes });
      if (!item) return res.status(404).json({ error: 'Запись не найдена' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const item = await Model.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      if (err.name === 'SequelizeValidationError')
        return res.status(400).json({ error: err.errors.map(e => e.message) });
      res.status(500).json({ error: err.message });
    }
  },

  updateStatus: async (req, res) => {
    try {
      const { status, managerNote } = req.body;
      const item = await Model.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: 'Запись не найдена' });
      const updates = { status };
      if (managerNote !== undefined) updates.managerNote = managerNote;
      await item.update(updates);
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const item = await Model.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: 'Запись не найдена' });
      await item.update(req.body);
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  remove: async (req, res) => {
    try {
      const item = await Model.findByPk(req.params.id);
      if (!item) return res.status(404).json({ error: 'Запись не найдена' });
      await item.destroy();
      res.json({ message: 'Удалено' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
});

module.exports = makeController;

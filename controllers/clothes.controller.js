const ClothesService = require('../services/clothes.service');

class ClothesController {
  async createClothes(req, res) {
    try {
      const newClothes = await ClothesService.createClothes(req.body);
      res.status(201).json(newClothes);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAllClothes(req, res) {
    try {
      const clothes = await ClothesService.getAllClothes();
      res.status(200).json(clothes);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getClothesById(req, res) {
    try {
      const clothes = await ClothesService.getClothesById(req.params.id);
      res.status(200).json(clothes);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async updateClothes(req, res) {
    try {
      const message = await ClothesService.updateClothes(req.params.id, req.body);
      res.status(200).json({ message });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async deleteClothes(req, res) {
    try {
      const message = await ClothesService.deleteClothes(req.params.id);
      res.status(200).json({ message });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = new ClothesController();

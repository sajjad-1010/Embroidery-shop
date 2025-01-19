const Clothes = require('../models')

class ClothesController {
  static async createClothes(req, res) {
    try {
      const { name, price, description, specifications, stock, fabricMaterial, color, embroideryTextureDesign, clothesDesign, size } = req.body;

      const newClothes = await Clothes.create({
        name,
        price,
        description,
        specifications,
        stock,
        fabricMaterial,
        color,
        embroideryTextureDesign,
        clothesDesign,
        size
      });

      res.status(201).json({ message: 'Clothes created successfully.', clothes: newClothes });
    } catch (error) {
      res.status(500).json({ message: 'Failed to create clothes.', error: error.message });
    }
  }

  static async getAllClothes(req, res) {
    try {
      const clothes = await Clothes.findAll({ include: Comment });
      res.status(200).json(clothes);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch clothes.', error: error.message });
    }
  }

  static async getClothesById(req, res) {
    try {
      const { id } = req.params;
      const clothes = await Clothes.findByPk(id, { include: Comment });

      if (!clothes) {
        return res.status(404).json({ message: 'Clothes not found.' });
      }

      res.status(200).json(clothes);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch clothes.', error: error.message });
    }
  }

  static async updateClothes(req, res) {
    try {
      const { id } = req.params;
      const { name, price, description, specifications, stock, fabricMaterial, color, embroideryTextureDesign, clothesDesign, size } = req.body;

      const clothes = await Clothes.findByPk(id);

      if (!clothes) {
        return res.status(404).json({ message: 'Clothes not found.' });
      }

      Object.assign(clothes, { name, price, description, specifications, stock, fabricMaterial, color, embroideryTextureDesign, clothesDesign, size });
      await clothes.save();

      res.status(200).json({ message: 'Clothes updated successfully.', clothes });
    } catch (error) {
      res.status(500).json({ message: 'Failed to update clothes.', error: error.message });
    }
  }

  static async deleteClothes(req, res) {
    try {
      const { id } = req.params;

      const clothes = await Clothes.findByPk(id);

      if (!clothes) {
        return res.status(404).json({ message: 'Clothes not found.' });
      }

      await clothes.destroy();
      res.status(200).json({ message: 'Clothes deleted successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete clothes.', error: error.message });
    }
  }
}

module.exports = ClothesController;

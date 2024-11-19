const Clothes = require('../models/clothes.model');

class ClothesRepository {
  async createClothes(data) {
    return await Clothes.create(data);
  }

  async getAllClothes() {
    return await Clothes.findAll();
  }

  async getClothesById(id) {
    return await Clothes.findByPk(id);
  }

  async updateClothes(id, data) {
    return await Clothes.update(data, { where: { id } });
  }

  async deleteClothes(id) {
    return await Clothes.destroy({ where: { id } });
  }
}

module.exports = new ClothesRepository();

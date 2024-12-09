const ClothesRepository = require('../repository/clothesRepository');

class ClothesService {
  async createClothes(data) {
    // Add any custom business logic here
    return await ClothesRepository.createClothes(data);
  }

  async getAllClothes() {
    return await ClothesRepository.getAllClothes();
  }

  async getClothesById(id) {
    const clothes = await ClothesRepository.getClothesById(id);
    if (!clothes) {
      throw new Error(`Clothes with ID ${id} not found`);
    }
    return clothes;
  }

  async updateClothes(id, data) {
    const updated = await ClothesRepository.updateClothes(id, data);
    if (!updated[0]) {
      throw new Error(`Clothes with ID ${id} not found`);
    }
    return `Clothes with ID ${id} updated successfully`;
  }

  async deleteClothes(id) {
    const deleted = await ClothesRepository.deleteClothes(id);
    if (!deleted) {
      throw new Error(`Clothes with ID ${id} not found`);
    }
    return `Clothes with ID ${id} deleted successfully`;
  }
}

module.exports = new ClothesService();

const express = require('express');
const ClothesController = require('../controllers/clothes.controller');

const router = express.Router();

router.post('/', ClothesController.createClothes);     
router.get('/', ClothesController.getAllClothes);      
router.get('/:id', ClothesController.getClothesById);  
router.put('/:id', ClothesController.updateClothes);   
router.delete('/:id', ClothesController.deleteClothes);

module.exports = router;
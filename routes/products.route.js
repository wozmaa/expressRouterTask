const { Router } = require('express');
const { productsController } = require('../controllers/products.controller');

const router = Router();

router.get('/products', productsController.getProducts);
router.get('/products/:id', productsController.getProductsById);
router.post('/products', productsController.createProduct);
router.delete('/products', productsController.deleteProduct);

module.exports = router;
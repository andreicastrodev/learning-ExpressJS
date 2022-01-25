
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products')



router.get("/add-product", productsController.getAddProduct);

// will only fire for get requests
router.post('/add-product', productsController.postAddProduct)

module.exports = router;
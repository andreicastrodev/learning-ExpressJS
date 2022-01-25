
const express = require('express');
const productsController = require('../controllers/products')
const router = express.Router();

// adds middleware function,s
router.get("/", productsController.getProduct);


module.exports = router;



 
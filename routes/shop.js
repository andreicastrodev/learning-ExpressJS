
const express = require('express');
const path = require('path');
const adminData = require('./admin')
const router = express.Router();

// adds middleware function,s
router.get("/", (req, res, next) => {
   const products = adminData.products;
   // pass in data to pug template
   res.render('shop', { prods: products });
});


module.exports = router;




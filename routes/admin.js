
const express = require('express');
const path = require('path');

const router = express.Router();

const products = [];


router.get("/add-product", (req, res, next) => {
    res.render('add-products')
    // dont call next if you are sending a response
});

// will only fire for get requests
router.post('/add-product', (req, res, next) => {
    products.push({
        title: req.body.title,
        docTitle: 'Shop'
    });
    res.redirect('/');
})

exports.routes = router;
exports.products = products
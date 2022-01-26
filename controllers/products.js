const Product = require('../models/product');



exports.getAddProduct = (req, res, next) => {
    res.render('add-products', { pageTitle: 'Products', path: '/admin/add-product' })
    // dont call next if you are sending a response
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop', { prods: products, path: '/', pageTitle: 'Shop' });
    });
    // pass in data to pug template
};
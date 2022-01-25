const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-products', { pageTitle: 'Products', path: '/admin/add-product' })
    // dont call next if you are sending a response
}

exports.postAddProduct = (req, res, next) => {
    products.push({
        title: req.body.title,
        docTitle: 'Shop'
    });
    res.redirect('/');
}

exports.getProduct = (req, res, next) => {
    // pass in data to pug template
    res.render('shop', { prods: products, path: '/', pageTitle: 'Shop' });
};
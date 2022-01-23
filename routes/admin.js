
const express = require('express')
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // dont call next if you are sending a response
});

// will only fire for get requests
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;
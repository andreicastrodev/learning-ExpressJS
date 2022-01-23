
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

//parser
// register a middleware, will all the next in the end
//do the request parsing 
app.use(bodyParser.urlencoded({extended: false}));

app.use("/add-product", (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // dont call next if you are sending a response
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})



// adds middleware function,s
app.use("/", (req, res, next) => {
    res.send('<h1> hello </h1>'); // allows us to send a response
});


app.listen(3000)
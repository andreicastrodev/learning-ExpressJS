
const express = require('express')
const app = express();
const path = require('path')
//routes
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const bodyParser = require('body-parser');
const { dirname } = require('path');

//parser
// register a middleware, will all the next in the end
//do the request parsing 
app.use(bodyParser.urlencoded({ extended: false }));
//template engine. compile dynamic templates with pug engine
app.set('view engine', 'pug');
app.set('views', 'views')
// exposing data
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes);
app.use(shopRoutes)

//sending errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', 'error.html'))
})


app.listen(3000)
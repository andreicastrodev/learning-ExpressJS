
const express = require('express')
const app = express();
const path = require('path')
//routes
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/errors')
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
app.use('/admin', adminRoutes);
app.use(shopRoutes)

//sending errors
app.use(errorController.error404)


app.listen(3000)
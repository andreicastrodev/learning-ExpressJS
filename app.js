
const express = require('express')
const app = express();
//routes
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require('body-parser')

//parser
// register a middleware, will all the next in the end
//do the request parsing 
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',adminRoutes);
app.use(shopRoutes)

//sending errors
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found <h1>')
})


app.listen(3000)
const http = require("http");
const express = require('express')


const app = express();

app.use("/add-product",(req, res, next) => {
    res.send('<h1>Add products</h1>'); // allows us to send a response
});



// adds middleware function,s
app.use("/",(req, res, next) => {
    res.send('<h1> hello </h1>'); // allows us to send a response
});


app.listen(3000)
const http = require("http");
const express = require('express')


const app = express();

// adds middleware function,
app.use((req, res, next) => {
    next(); // allows the tunnel of another middle ware
    // basically calls another middle ware
});
app.use((req, res, next) => {
    res.send('<h1> hello </h1>'); // allows us to send a response
});


app.listen(3000)
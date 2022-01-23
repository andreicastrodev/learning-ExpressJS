
const express = require('express')
const router = express.Router();

// adds middleware function,s
router.get("/", (req, res, next) => {
    res.send('<h1> hello </h1>'); // allows us to send a response
});


module.exports = router;




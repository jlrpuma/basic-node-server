const express = require('express');
const router = express.Router();

const data = require("../data/tasks.json");

router.use(express.json());


router.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next();
})


router.get('/status',  function (req, res) {
    res.send("Alive");
});

router.get('/',  function (req, res) {
    res.send(data);
});

module.exports = router;
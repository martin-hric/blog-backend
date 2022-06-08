const express = require("express");
const router = express.Router();
const db = require('../db');


/**
 *Check connection to database
 */
router.get('/checkConnection',(req,res) => res.sendStatus(200));

module.exports = router;

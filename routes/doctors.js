var express = require('express');
var router = express.Router();
const Doctor = require('../models').Doctor

/* GET users listing. */
router.get('/', function (req, res, next) {
  Doctor.findAll()
    .then(doctors => {
      res.json({ doctors })
    })
});

module.exports = router;
var express = require('express');
var router = express.Router();
const Patient = require('../models').Patient

/* GET users listing. */
router.get('/', function (req, res, next) {
  Patient.findAll()
    .then(patients => {
      res.json({ patients })
    })
});

router.post('/', function (req, res, next) {
  Patient.create(req.body)
    .then(user => {
      res.json({ patient })
    })
});



module.exports = router;

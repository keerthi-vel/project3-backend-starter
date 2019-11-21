var express = require('express');
var router = express.Router();
const Patient = require('../models').Patient

/* READ Patients listing. */
router.get('/', function (req, res, next) {
  Patient.findAll()
    .then(patients => {
      res.json({ patients })
    })
});

// CREATE patient
router.post('/', function (req, res, next) {
  Patient.create(req.body)
    .then(user => {
      res.json({ patient })
    })
});

// DELETE patient
router.delete('/:id', (req, res) => {
  console.log("Delete quote ${req}")
  res.send('Delete patient')
})



module.exports = router;

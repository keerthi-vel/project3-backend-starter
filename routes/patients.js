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
router.post("/", (req, res) => {
  Patient.create({
    name: req.body.name,
    age: req.body.age,
    patientId: req.body.patientId,
    gender: req.body.gender
  })
    .then(() => {
      return Patient.findAll();
    })
    .then(patient => {
      res.json({ patient });
    })
    .catch(error => {
      res.json({ message: error });
    });
}); 

// DELETE patient
router.delete("/:id", (req, res) => {
  Patient.destroy({where: {id: req.params.id } })
  .then(deletedPatient => {
      return Patient.findAll()
  })
  .then(patients => {
      res.json({ patients: patients })
  })
});



module.exports = router;

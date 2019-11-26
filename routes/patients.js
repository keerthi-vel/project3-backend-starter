var express = require('express');
var router = express.Router();
 const Patient = require('../models').Patient
const Appointment = require('../models').Appointment
const Doctor = require('../models').Doctor

/* READ Patients listing. */
router.get('/', function (req, res, next) {
  Patient.findAll({
    // include: [{ model:Appointment}] for only appts 
    include: [{ model:Doctor }]
})
    .then(patients => {
      res.json({ patients })
    })
});

// CREATE patient
router.post("/", (req, res) => {
  let newPatient = {
    name: req.body.newPatient.name,
    age: req.body.newPatient.age,
    gender: req.body.newPatient.gender
  }
  Patient.create(newPatient)
    .then(() => {
      return Patient.findAll();
    })
    .then(patients => {
      res.json({ patients });
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

router.put("/:id", (req, res) => {
  console.log(req.body)
  console.log(req.params.id)
  let age = parseInt(req.body.age)
  Patient.update(
    {
      name: req.body.name,
      age: age,
      gender: req.body.gender
    },
    {
      where: { id: req.params.id },
      returning: true
    }
  ).then(() => {
    return Patient.findAll()    
  })
  .then(patients => {
    res.json({ patients });
  });
});



module.exports = router;

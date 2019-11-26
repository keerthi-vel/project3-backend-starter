var express = require('express');
var router = express.Router();
const Doctor = require('../models').Doctor
const Appointment = require('../models').Appointment
const Patient = require('../models').Patient


// CREATE 
router.post("/", (req, res) => {
    Doctor.create({
      name: req.body.newDoctor.name,
      address: req.body.newDoctor.address,
      doctorId: req.body.newDoctor.doctorId,
      phone: req.body.newDoctor.phone
    })
      .then(() => {
        return Doctor.findAll();
      })
      .then(doctors => {
        res.json({ doctors });
      })
      .catch(error => {
        res.json({ message: error }); 
      });
  }); 
//notes
/* GET users listing. */
router.get('/', function (req, res, next) {
  Doctor.findAll({
      include: [{ model:Patient }]
  })
    .then(doctors => {
      res.json({ doctors })
    })
});

// DELETE
router.delete("/:id", (req, res) => {
    Doctor.destroy({where: {id: req.params.id } })
    .then(deletedDoctor => {
        return Doctor.findAll()
    })
    .then(doctors => {
        res.json({ doctors: doctors })
    })
});

module.exports = router;
var express = require("express");
var router = express.Router();
const Appointment = require("../models").Appointment;
const Patient = require("../models").Patient;

//CREATE an appoinment then show all appointments
router.post("/", (req, res) => {
    console.log(req.body)
  Appointment.create({
    date: req.body.date,
    time: req.body.time,
    doctorId: req.body.doctorId,
    patientId: req.body.patientId
  })
    .then((newAppt) => {
      console.log(newAppt)
      return Appointment.findAll();
    })
    .then(appointments => {
      res.json({ appointments });
    })
    .catch(error => {
      res.json({ message: error });
    });
});

/* READ appointments listing. */
router.get("/", (req, res) => {
    Appointment.findAll(
        {include: [{model:Patient}],
        attributes: ['time', 'date','patientId', 'doctorId', 'id']}
    ).then(appointments => {
      res.json({ appointments });
    });
  });

// UPDATE
router.put("/:id", (req, res) => {
  //console.log(req.params.id)
  Appointment.update(
    {
      date: req.body.date,
      time: req.body.time,
      doctorId: req.body.doctorId,
      patientId: req.body.patientId
    },
    {
      where: { id: req.params.id },
      returning: true
    }
  ).then(appointments => {
    res.json({ appointments });
  });
});

// Delete appointment
router.delete("/:id", (req, res) => {
    Appointment.destroy({where: {id: req.params.id } })
    .then(deletedAppt => {
        return Appointment.findAll()
    })
    .then(appointments => {
        res.json({ appointments: appointments })
    })
});

// router.delete("/:id", (req, res) => {
//   Patient.destroy({where: {id: req.params.id } })
//   .then(deletedPatient => {
//       return Patient.findAll()
//   })
//   .then(patients => {
//       res.json({ patients: patients })
//   })
// });

module.exports = router;

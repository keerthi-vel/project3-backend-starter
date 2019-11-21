var express = require("express");
var router = express.Router();
const Appointment = require("../models").Appointment;



//CREATE an appoinment then show all appointments
router.post("/", (req, res) => {
  Appointment.create({
    date: req.body.date,
    time: req.body.time,
    doctorId: req.body.doctorId,
    patientId: req.body.patientId
  })
    .then(() => {
      return Appointment.findAll();
    })
    .then(appointment => {
      res.json({ appointment });
    })
    .catch(error => {
      res.json({ message: error });
    });
});

/* READ appointments listing. */
router.get("/", (req, res) => {
    Appointment.findAll().then(appointment => {
      res.json({ appointment });
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
  ).then(quote => {
    res.json(appointment);
  });
});

// Delete appointment
router.delete("/:id", (req, res) => {
  console.log("Delete quote ${req}");
  res.send(`Deleted ${req.params.id}`);
});

module.exports = router;

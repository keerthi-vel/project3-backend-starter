var express = require('express');
var router = express.Router();
const Doctor = require('../models').Doctor


// CREATE 
router.post("/", (req, res) => {
    Doctor.create({
      name: req.body.name,
      address: req.body.address,
      doctorId: req.body.doctorId,
      phone: req.body.phone
    })
      .then(() => {
        return Doctor.findAll();
      })
      .then(doctor => {
        res.json({ doctor });
      })
      .catch(error => {
        res.json({ message: error });
      });
  }); 

/* GET users listing. */
router.get('/', function (req, res, next) {
  Doctor.findAll()
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
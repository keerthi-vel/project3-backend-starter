'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {});
  Patient.associate = function(models) {
    // Patient.belongsToMany(models.Appointment, { through: 'Appointments', foreignKey: 'patientId' })
    Patient.hasMany(models.Appointment, { foreignKey: 'patientId' })
    Patient.belongsToMany(models.Doctor, {through: {
      model: models.Appointment
    },  foreignKey: 'patientId', otherKey: 'doctorId' })
  };
  return Patient;
};


// Testing connection
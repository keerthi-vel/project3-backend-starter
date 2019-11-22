'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {});
  Patient.associate = function(models) {
    Patient.belongsToMany(models.Appointment, { as: 'patientAppts',through: 'Appointments', foreignKey: 'patientId' })
  };
  return Patient;
};

// Testing connection
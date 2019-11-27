'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.STRING,
    time: DataTypes.STRING,
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER,
    id: {type: DataTypes.INTEGER, primaryKey: true}
  }, {});
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Doctor, {foreignKey: 'doctorId'});
    Appointment.belongsTo(models.Patient, {foreignKey: 'patientId'})
  };
  return Appointment;
};
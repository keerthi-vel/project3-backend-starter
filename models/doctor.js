'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {});
  Doctor.associate = function(models) {
    Doctor.hasMany(models.Appointment, { foreignKey: 'doctorId' })
    Doctor.belongsToMany(models.Patient, {through: {
      model: models.Appointment
    },  foreignKey: 'doctorId', otherKey: 'patientId' })
  };
  return Doctor;
};
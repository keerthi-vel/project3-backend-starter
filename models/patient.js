'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    patientId: DataTypes.INTEGER
  }, {});
  Patient.associate = function(models) {
    // associations can be defined here
  };
  return Patient;
};
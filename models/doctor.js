'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    doctorId: DataTypes.INTEGER
  }, {});
  Doctor.associate = function(models) {
    // associations can be defined here
  };
  return Doctor;
};
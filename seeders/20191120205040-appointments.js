'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Appointments', [
        {
          date: '12/13/2019',
          time: '4:30PM',
          doctorId: 21,
          patientId: 100,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '11/28/2019',
          time: '3:30PM',
          doctorId: 22,
          patientId: 103,
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

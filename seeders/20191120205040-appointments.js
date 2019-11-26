'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Appointments', [
        {
          date: '12/13/2019',
          time: '4:30PM',
          doctorId: 1,
          patientId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '11/28/2019',
          time: '3:30PM',
          doctorId: 2,
          patientId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          date: '11/28/2019',
          time: '3:30PM',
          doctorId: 3,
          patientId: 3,
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

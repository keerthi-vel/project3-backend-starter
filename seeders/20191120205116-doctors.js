'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Doctors', [
      {
        name: 'John Smith',
        address: '100 Wmain st',
        phone: 502,
        doctorId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'James Daniel',
        address: '100 Nmain st',
        phone: 502,
        doctorId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Keerthi Velaga',
        address: '100 Emain st',
        phone: 502,
        doctorId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jane Smith',
        address: '100 main st',
        phone: 502,
        doctorId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Logan Crawford',
        address: '100 Smain st',
        phone: 502,
        doctorId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jessica Amber',
        address: '100 SWmain st',
        phone: 502,
        doctorId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      }
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

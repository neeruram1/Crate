'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('styles', [
      {
        name: 'Bohemian Boulder',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mall Goth',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lumber Jack Hipster',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Covid Coture',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Young Republican',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Classy & Sassy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Old Timey Baseball Player',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('styles', null, {});
  }
}

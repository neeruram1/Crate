'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
     return queryInterface.addColumn( 'Users', 'styleId', Sequelize.INTEGER,
      references: {
        model: 'styles',
        key: 'id'
      },
      allowNull: true,
      defaultValue: null
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.removeColumn( 'Users', 'styleId',
      references: {
       model: 'styles',
       key: 'id'
     },
     allowNull: true,
     defaultValue: null
   );
  }
}

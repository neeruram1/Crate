'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
     return Promise.all([
       queryInterface.addColumn(
         'users',
         'style',
          Sequelize.STRING
        ),
      ]);
   },

   down: function (queryInterface, Sequelize) {
    return Promise.all([queryInterface.removeColumn('users', 'style')]);
 }
};

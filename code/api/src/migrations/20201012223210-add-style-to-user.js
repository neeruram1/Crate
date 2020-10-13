module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'styleId', {
        type: Sequelize.INTEGER,
        references: {
          model: 'styles',
          key: 'id'
        },
        allowNull: true,
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.removeColumn('users', 'styleId')]);
  },
};

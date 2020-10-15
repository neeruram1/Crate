module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('surveyImages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      altText: {
        type: Sequelize.TEXT
      },
      style: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      },
      category: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('surveyImages');
  }
}

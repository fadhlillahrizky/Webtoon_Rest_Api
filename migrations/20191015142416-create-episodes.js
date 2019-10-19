'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      webtoonId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'webtoons',
            key: 'id'
        },    
      },
      createdAt: {
        allowNull: false
      },
      updatedAt: {
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('episodes');
  }
};
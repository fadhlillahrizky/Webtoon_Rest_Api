'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      page: {
        type: Sequelize.INTEGER
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
      episodeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'episodes',
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
    return queryInterface.dropTable('images');
  }
};
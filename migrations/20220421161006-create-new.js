'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      // categoryId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Categories',
      //     key: 'id',
      //   }
      // },
      deletedAt: {
        type: Sequelize.DATE
<<<<<<< HEAD
=======
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
        updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
>>>>>>> 84c923b6da09d0b38b8cb54cc117b293381f54e9
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('News');
  }
};
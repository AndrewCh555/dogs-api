'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dogs = [
      {
        id: 1,
        name: 'Neo',
        color: 'red&amber',
        tail_length: 22,
        weight: 32,
      },
      {
        id: 2,
        name: 'Jessy',
        color: 'black&white',
        tail_length: 7,
        weight: 14,
      },
    ];

    await queryInterface.createTable('dogs', {
      id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tail_length: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      weight: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
    await queryInterface.bulkInsert('dogs', dogs, {});
  },

  down: async (queryInterface) => {
    await queryInterface.dropAllTables();
  },
};

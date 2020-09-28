"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      token: {
        type: Sequelize.STRING,
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      itemDiscount: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      tax: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      total: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      promo: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Orders");
  },
};

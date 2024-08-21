"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // sequelize db:migrate
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING(100), // VARCHAR(100)
        allowNull: false, // NOT NULL
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // UNIQUE
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      gender: {
        type: "CHAR(1)",
        allowNull: false,
      },
      role: {
        type: Sequelize.STRING(10),
        allowNull: false,
        defaultValue: "user",
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
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

  // sequelize db:migrate:undo
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // sequelize db:seed
  async up(queryInterface, Sequelize) {
    const data = require("../data/users.json").map((el) => {
      el.createdAt = new Date();
      el.updatedAt = new Date();
      return el;
    });

    await queryInterface.bulkInsert("Users", data);
  },

  // sequelize db:seed:undo
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users");
  },
};

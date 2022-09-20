"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "favorites",
      [
        {
          userId: 4,
          locationId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          locationId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          locationId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          locationId: 8,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 4,
          locationId: 13,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("favorites", null, {});
  }
};

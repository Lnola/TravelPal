"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Luka",
          surname: "Nola",
          username: "Fifthorseman",
          password:
            "$2b$10$tfZ8ZM7G3uqmP4Hsse2ErOwKihL8ELNjIZ2Ug1/Dg5Kfdc/mUIoW.", // 1a2b3c
          email: "nola.luka@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Ivo",
          surname: "Ivić",
          username: "III3",
          password:
            "$2b$10$jngtLkBkI9TEGpWZQ94s5Op6QejOjvSXWZ6wFF/OU8RrLy2/FlH5K", //123123
          email: "ivo.ivic@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "",
          surname: "",
          username: "Matan",
          password:
            "$2b$10$Gkxoj35KjvWFUMuuVePkuOSUf3Lfh8LNCYnwm9FjGn4/B/m6Ce0ZG", //121212
          email: "matan@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "John",
          surname: "Jones",
          username: "JJ",
          password:
            "$2b$10$ZQqfkF6x2.h60Ijy9Ial8uiGxVZb/kYj7vPm6ONQXGbQ4Ji.wvvSC", //123456
          email: "jjones@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};

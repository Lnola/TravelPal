'use strict';
const bcrypt = require('bcrypt');

const createUser = (index) => {
  const password = bcrypt.hashSync('1234', process.env.SALT_ROUNDS || 10);

  return {
    name: `User${index}`,
    surname: 'Example',
    username: `example${index}`,
    password: password,
    email: 'example@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [createUser('')];
    for (let i = 1; i <= 3; i++) users.push(createUser(i));
    return queryInterface.bulkInsert('users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};

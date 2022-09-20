const Sequelize = require('sequelize');
const sequelize = require('../database');

const RefreshToken = sequelize.define('refresh_token', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: 'users',
    referencesKey: 'id',
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = RefreshToken;

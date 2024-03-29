const Sequelize = require('sequelize');
const sequelize = require('../database');

const Location = sequelize.define('location', {
  result: {
    type: Sequelize.JSON,
    allowNull: false,
  },
  poi: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Location;

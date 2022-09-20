const Sequelize = require('sequelize');
const sequelize = require('../database');

const CityLocations = sequelize.define('city_location', {
  query: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  result: {
    type: Sequelize.JSON,
    allowNull: false,
  },
  poi: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = CityLocations;

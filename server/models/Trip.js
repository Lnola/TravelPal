const Sequelize = require('sequelize');
const sequelize = require('../database');

const Trip = sequelize.define('trip', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dateFrom: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  dateTo: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: 'users',
    referencesKey: 'id',
  },
});

module.exports = Trip;

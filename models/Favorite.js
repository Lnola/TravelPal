const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Favorite = sequelize.define('favorite', {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: 'users',
    referencesKey: 'id',
  },
  locationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: 'locations',
    referencesKey: 'id',
  },
});

module.exports = Favorite;

const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const TripLocation = sequelize.define("trip_location", {
  tripId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: "trips",
    referencesKey: "id"
  },
  locationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: "locations",
    referencesKey: "id"
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
});

module.exports = TripLocation;

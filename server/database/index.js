const Sequelize = require('sequelize');

const { DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_DIALECT } =
  process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

sequelize
  .authenticate()
  .then(() => console.log('Database connection established'))
  .catch((err) => console.log('Database connection failed', err));

module.exports = sequelize;

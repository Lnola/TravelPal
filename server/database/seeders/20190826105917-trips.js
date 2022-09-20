'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'trips',
      [
        {
          name: 'Trip to Split',
          dateFrom: '2019-09-25',
          dateTo: '2019-09-30',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Trip to Dubrovnik',
          dateFrom: '2019-06-18',
          dateTo: '2019-06-20',
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Trip to Zadar',
          dateFrom: '2018-01-03',
          dateTo: '2018-01-04',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Split ADVENTure',
          dateFrom: '2020-12-15',
          dateTo: '2020-12-30',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '1 day trip',
          dateFrom: '2019-03-22',
          dateTo: '2019-03-22',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Split, Zadar',
          dateFrom: '2019-04-21',
          dateTo: '2019-04-30',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'The Great Adventure',
          dateFrom: '2019-01-30',
          dateTo: '2020-01-30',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('trips', null, {});
  },
};

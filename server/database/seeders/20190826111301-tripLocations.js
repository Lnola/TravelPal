'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'trip_locations',
      [
        {
          tripId: 1,
          locationId: 11,
          date: '2019-09-25',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 1,
          locationId: 12,
          date: '2019-09-25',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 1,
          locationId: 13,
          date: '2019-09-26',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 1,
          locationId: 14,
          date: '2019-09-27',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 1,
          locationId: 15,
          date: '2019-09-29',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 1,
          locationId: 11,
          date: '2019-09-30',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 2,
          locationId: 7,
          date: '2019-06-18',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 2,
          locationId: 8,
          date: '2019-06-18',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 2,
          locationId: 9,
          date: '2019-06-18',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 2,
          locationId: 10,
          date: '2019-06-18',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 3,
          locationId: 1,
          date: '2018-01-03',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 3,
          locationId: 2,
          date: '2018-01-03',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 3,
          locationId: 4,
          date: '2018-01-04',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 4,
          locationId: 15,
          date: '2020-12-17',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 4,
          locationId: 14,
          date: '2020-12-20',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 4,
          locationId: 11,
          date: '2020-12-29',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 5,
          locationId: 1,
          date: '2019-03-22',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 5,
          locationId: 2,
          date: '2019-03-22',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 5,
          locationId: 3,
          date: '2019-03-22',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 5,
          locationId: 4,
          date: '2019-03-22',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 5,
          locationId: 5,
          date: '2019-03-22',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 1,
          date: '2019-04-21',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 2,
          date: '2019-04-22',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 3,
          date: '2019-04-22',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 4,
          date: '2019-04-24',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 5,
          date: '2019-04-25',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 11,
          date: '2019-04-26',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 12,
          date: '2019-04-26',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 13,
          date: '2019-04-27',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 14,
          date: '2019-04-28',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tripId: 6,
          locationId: 15,
          date: '2019-04-29',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('trip_locations', null, {});
  },
};

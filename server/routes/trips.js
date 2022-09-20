const router = require('express').Router();
const Trip = require('../models/Trip');

const path = '/trips';

router.get('/:userId', (req, res) =>
  Trip.findAll({ where: { userId: req.params.userId } })
    .then((trips) => {
      res.send(trips);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
);

router.get('/trip/:id', (req, res) => {
  Trip.findByPk(req.params.id)
    .then((trip) => {
      res.send(trip);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post('/add', (req, res) => {
  const { name, selectedDate, userId } = req.body;

  Trip.create({
    name,
    dateFrom: selectedDate[0],
    dateTo: selectedDate[1],
    userId,
  })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(422);
    });
});

router.post('/edit', (req, res) => {
  const { name, selectedDate, userId, tripId } = req.body;
  console.log(tripId, name, selectedDate, userId);

  Trip.update(
    {
      name,
      dateFrom: selectedDate[0],
      dateTo: selectedDate[1],
    },
    { where: { id: tripId } }
  )
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(422);
    });
});

module.exports = { path, router };

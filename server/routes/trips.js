const router = require('express').Router();
const Trip = require('../models/Trip');

const path = '/trips';

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const trips = await Trip.findAll({ where: { userId } });
    res.send(trips);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/trip/:id', async (req, res) => {
  const { id } = req.params;
  const trip = await Trip.findByPk(id);

  try {
    res.send(trip);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/add', async (req, res) => {
  const { name, selectedDate, userId } = req.body;
  const dateFrom = selectedDate[0];
  const dateTo = selectedDate[0];
  const newData = { name, dateFrom, dateTo, userId };

  try {
    const newTrip = await Trip.create(newData);
    res.send(newTrip);
  } catch (err) {
    console.log(err);
    res.sendStatus(422);
  }
});

router.post('/edit', async (req, res) => {
  const { name, selectedDate, tripId } = req.body;
  const dateFrom = selectedDate[0];
  const dateTo = selectedDate[0];
  const newData = { name, dateFrom, dateTo };

  try {
    const newTrip = await Trip.update(newData, { where: { id: tripId } });
    res.send(newTrip);
  } catch (err) {
    console.log(err);
    res.sendStatus(422);
  }
});

module.exports = { path, router };

const router = require('express').Router();
const { BAD_REQUEST } = require('http-status');

const Trip = require('../models/Trip');

const HttpError = require('../helpers/httpError');
const errorMessages = require('../helpers/errorMessages');
const { authenticate } = require('../helpers/auth');

const path = '/trips';

router.get('/', authenticate, async (req, res) => {
  const userId = req.user.id;

  try {
    const trips = await Trip.findAll({ where: { userId } });
    return res.send(trips);
  } catch (err) {
    return res.sendStatus(500);
  }
});

router.get('/trip/:id', async (req, res) => {
  const { id } = req.params;
  const trip = await Trip.findByPk(id);

  try {
    return res.send(trip);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

router.post('/add', async (req, res) => {
  const { name, selectedDate, userId } = req.body;
  const dateFrom = selectedDate[0];
  const dateTo = selectedDate[0];
  const newData = { name, dateFrom, dateTo, userId };

  try {
    const newTrip = await Trip.create(newData);
    return res.send(newTrip);
  } catch (err) {
    console.log(err);
    return next(new HttpError(BAD_REQUEST, errorMessages.BAD_REQUEST));
  }
});

router.post('/edit', async (req, res) => {
  const { name, selectedDate, tripId } = req.body;
  const dateFrom = selectedDate[0];
  const dateTo = selectedDate[0];
  const newData = { name, dateFrom, dateTo };

  try {
    const newTrip = await Trip.update(newData, { where: { id: tripId } });
    return res.send(newTrip);
  } catch (err) {
    console.log(err);
    return next(new HttpError(BAD_REQUEST, errorMessages.BAD_REQUEST));
  }
});

module.exports = { path, router };

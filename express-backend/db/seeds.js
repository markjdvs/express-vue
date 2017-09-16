const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');
const moment = require('moment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Event = require('../models/event');

Event.collection.drop();

Event
  .create([{
    title: 'Glastonbury Festival',
    dateFrom: moment('2017-06-21'),
    dateTo: moment('2017-06-26'),
    location: 'Glastonbury, UK',
    description: 'A festival to remember!'
  },
  {
    title: 'Christmas Day',
    dateFrom: moment('2017-12-25'),
    dateTo: moment('2017-12-25'),
    location: '10 Downing Street, London, UK',
    description: `Everyone's welcome!`
  },
  {
    title: 'Hopefully a better year for the world!',
    dateFrom: moment('2018-01-01'),
    dateTo: moment('2018-12-31'),
    location: 'Various locations around the globe.',
    description: `Let's all just try to get along, hey?`
  }])
  .then((events) => {
    console.log(`${events.length} events created.`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

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
    location: 'Glastonbury',
    description: 'A weekend to remember!'
  }])
  .then((events) => {
    console.log(`${events.length} events created.`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

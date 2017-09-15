const mongoose = require('mongoose');
const { dbURI } = require('../config/environment');

mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const Event = require('../models/event');

Event.collection.drop();

Event
  .create([{
    title: 'Glastonbury Festival',
    dateFrom: 21-06-2017,
    dateTo: 26-06-2017,
    location: 'Glastonbury',
    description: 'A weekend to remember!'
  }])
  .then((events) => {
    console.log(`${events.length} events created.`);
  })
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

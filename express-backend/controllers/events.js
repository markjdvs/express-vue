const Event = require('../models/event');

function eventsIndex(req, res, next) {
  Event
    .find()
    .exec()
    .then((events) => res.json(events))
    .catch(next);
}

function eventsNew(req, res, next) {
  Event
    .create(req.body)
    .then((event) => res.status(201).json(event))
    .catch(next);
}

module.exports = {
  index: eventsIndex,
  new: eventsNew
};

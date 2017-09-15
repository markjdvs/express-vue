const Event = require('../models/event');

function eventsIndex(req, res, next) {
  Event
    .find()
    .exec()
    .then((events) => res.json(events))
    .catch(next);
}

module.exports = {
  eventsIndex
};

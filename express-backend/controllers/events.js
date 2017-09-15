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

function eventsShow(req, res, next) {
  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if(!event) return res.status(404);
      res.json(event);
    })
    .catch(next);
}

function eventsUpdate(req, res, next) {
  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      Object.assign(event, req.body);
      return event.save();
    })
    .then((event) => res.json(event))
    .catch(next);
}

function eventsDelete(req, res, next) {
  Event
    .findById(req.params.id)
    .exec()
    .then((event) => {
      if(!event) return res.status(404);
      return event.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: eventsIndex,
  new: eventsNew,
  show: eventsShow,
  update: eventsUpdate,
  delete: eventsDelete
};

const router = require('express').Router();
const events = require('../controllers/events');

router.route('/events')
  .get(events.index)
  .post(events.new);

router.route('/events/:id')
  .get(events.show);

module.exports = router;

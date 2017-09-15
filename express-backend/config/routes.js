const router = require('express').Router();
const events = require('../controllers/events');

router.route('/events')
  .get(events.index)
  .post(events.new);

module.exports = router;

const routes = require('express').Router();

routes.get('/', (req,res) => {
  res.send({
    message: `Splashpage`
  });
});

routes.post('/register', (req,res) => {
  res.send({
    message: `Hi ${req.body.email}, you've been registered.`
  });
});

// routes.post('/events/new', (req, res) => {
//   res.send({
//     message: `${req.body.event.title}`
//   });
// });

module.exports = routes;

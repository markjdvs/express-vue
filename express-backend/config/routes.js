const routes = require('express').Router();

routes.get('/', (req,res) => {
  res.send({
    message: 'Node server working!'
  });
});

module.exports = routes;

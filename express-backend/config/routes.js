const routes = require('express').Router();

routes.get('/', (req,res) => {
  res.send(`Node server working!`);
});

module.exports = routes;

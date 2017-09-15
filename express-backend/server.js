const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { port, env, dbURI } = require('./config/environment');
const routes = require('./config/routes');

const app = express();

if(env !== 'test') app.use(morgan('dev'));

app.use(routes);

app.listen(port, () => console.log(`Express is listening on port ${port}`));

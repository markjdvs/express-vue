const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./config/routes');
const app = express();

app.use(routes);

app.listen(8000, () => console.log(`Express is listening on port 8000`));

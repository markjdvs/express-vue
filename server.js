const express = require('express');
// const mongoose = require('mongoose');

const app = express();

app.get('/*', (req, res) => res.render('Hello world'));

app.listen(8000, () => console.log(`Express is listening on port 8000`));

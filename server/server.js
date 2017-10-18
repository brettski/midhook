'use strict'
const PORT = process.env.PORT | 7000;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

require('./routes/api')(app);


app.listen(PORT, () => {
    console.log('Server listening on port', PORT);
});

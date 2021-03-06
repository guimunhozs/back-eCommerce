const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./controllers/product-controller')(app);

app.listen(process.env.PORT || 8000);
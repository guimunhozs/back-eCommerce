const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//   res.send('Eu nunca serei chamado! T.T');
// });

require('./controllers/authController')(app);

app.listen(process.env.PORT || 8000);
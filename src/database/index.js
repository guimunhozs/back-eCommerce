const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoose;
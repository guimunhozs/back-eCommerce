const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://guimunhozs:testeecommerce@ecommerce-eomll.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;
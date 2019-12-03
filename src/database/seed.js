'use strict'
const { generateData } = require('./data.js');
const Product = require('../models/Product');

Product.find({}).deleteMany()
  .then( () => {
      Product.create(
        generateData()
      );
    });
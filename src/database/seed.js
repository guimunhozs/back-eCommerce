'use strict'
const { generateData } = require('./data.js');
const Product = require('../models/Product');

await Product.find({}).deleteMany();
await Product.create(generateData());
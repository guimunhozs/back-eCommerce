const express = require('express');

const Product = require('../models/product');

const router = express.Router();

router.get('/', async (req, res) => {
  var page = parseInt(req.query.page) || 0;
  var limit = parseInt(req.query.limit) || 16;
  var name = req.query.name || req.query.category;

  var query = name ?
    {
      $or: [
        { name: new RegExp('.*' + name + '.*', "i") },
        { category: new RegExp('.*' + name + '.*', "i") }
      ]
    } : {};

  var productList = await Product.find(query)
    .sort({ name: 1 })
    .skip((page - 1) * limit)
    .limit(limit).exec();

  var allProductListSize = await Product.countDocuments(query).exec();

  return res.json({
    total: allProductListSize,
    page: page,
    pageSize: limit,
    products: productList
  });
});

module.exports = app => app.use('/product', router);
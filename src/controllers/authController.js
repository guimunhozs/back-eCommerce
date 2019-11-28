const express = require('express');

const Product = require('../models/Product');

const router = express.Router();

router.post('/', async (req, res) => {
  // return res.send(req.body);
  try {
    const product = await Product.create(req.body);
    return res.send({ product });
  } catch {
    return res.status(400).send({ error: 'Registration failed' });
  }
});


router.get('/', async (req, res) => {
  var page = parseInt(req.query.page) || 0;
  var limit = parseInt(req.query.limit) || 16;
  var name = req.query.name;
  
  var query = name?{ name: new RegExp('.*'+name+'.*') } : {};
  Product.find(query)
    .sort( { _id: -1 } )
    .skip((page - 1) * limit)
    .limit(limit)
    .exec((err, doc) => {
      if (err) {
        return res.json(err);
      }
      Product.countDocuments(query).exec((count_error, count) => {
        if (err) {
          return res.json(err);
        }
        return res.json({
          total: count,
          page: page,
          pageSize: doc.length,
          products: doc
        });
      });
    });
});


router.get('/all', function (req, res) {
  Product.find({}, function (err, products) {
    var productMap = {};

    products.forEach(function (product) {
      productMap[product._id] = product;
    });

    res.send(productMap);
  });
});
module.exports = app => app.use('/product', router);
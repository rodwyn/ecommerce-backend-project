const express = require('express');
const router = express.Router();

let product = [];

router.post('/', (req, res, next) => {
  product = [...req.body.product || []];
  if (req.body.remove) product.splice(req.body.remove, 1);
  if (req.body.new) product.push({});

  next();
});

router.use('/', (req, res) => {
  res.render('product', {
    title: 'Product list',
    product
  })
});

module.export = router;

const express = require('express')
const router = express.Router()
const Products = require('../controller/product');

router.use('/', (req, res) => {
  const product = [];

  res.render('product', {
    title: 'Products',
    product,
    userinfo: req.userContext.userinfo
  })
})

router.post('/create', Products.createProduct);
router.get('/get', Products.getProducts);
router.get('/get/:name', Products.getProduct);
router.put('/update/:id', Products.updateProduct);
router.delete('/remove/:id', Products.removeProduct);

module.exports = router

const express = require('express')
const router = express.Router()

const productsByUser = {};

router.post('/', (req, res, next) => {
  const product = [...req.body.product || []]
  if (req.body.remove) product.splice(req.body.remove, 1)
  if (req.body.new) product.push({})

  productsByUser[req.userContext.userinfo.sub] = product

  next()
})

router.use('/', (req, res) => {
  const product =  productsByUser[req.userContext.userinfo.sub] || []

  res.render('product', {
    title: 'Product list',
    product,
    userinfo: req.userContext.userinfo
  })
})

module.exports = router

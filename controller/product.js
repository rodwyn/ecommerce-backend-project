const Products = require('../dao/product');

exports.createProduct = (req, res, next) => {
  const product = {
    description: req.body.description,
    imgSrc: req.body.imgSrc,
    price: req.body.price,
    rate: req.body.rate,
    stock: req.body.stock
  }

  Products.create(product, (error, product) => {
    if (error) {
      res.json({
        error: error
      });
    }
    res.json({
      message: 'Product created successfully.'
    });
  });
};

exports.getProducts = (req, res, next) => {
  Products.get({}, (error, products) => {
    if (error) {
      res.json({
        error: error
      });
    }
    res.json({
      products: products
    });
  });
};

exports.getProduct = (req, res, next) => {
  Products.get({description: req.params.id}, (error, products) => {
    if (error) {
      res.json({
        error: error
      });
    }
    res.json({
      products: products
    });
  });
};

exports.updateProduct = (req, res, next) => {
  const product = {
    description: req.body.description,
    imgSrc: req.body.imgSrc,
    price: req.body.price,
    rate: req.body.rate,
    stock: req.body.stock
  };

  Products.update({_id: req.params.id}, product, (error, product) => {
    if (error) {
      res.json({
        error: error
      });
    }
    res.json({
      message: 'Product updated successfully.'
    });
  });
};

exports.removeProduct = (req, res, next) => {
  Products.delete({_id: req.params.id}, (error, product) => {
    if (error) {
      res.json({
        error: error
      });
    }
    res.json({
      message: 'Hero deleted successfully.'
    });
  });
};

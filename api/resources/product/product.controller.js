import Product from './product.model';

const SUCCESS = 'SUCCESS';
const FAILED = 'FAILED';
const NOT_FOUND = 'NOT_FOUND';

export default {
  async createProduct (req, res) {
    try {
      const product = await Product.create(req.body);
      return res.send({ message: SUCCESS, data: product});
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async findProducts (req, res) {
    const query = (req.query.id) ? { _id: req.query.id } : {};

    try {
      const products = await Product.find(query);
      return res.send({ message: SUCCESS, data: products});
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async updateProduct (req, res) {
    try {
      let product = {
        description: req.body.description,
        imgSrc: req.body.imgSrc,
        price: req.body.price,
        rate: req.body.rate,
        stock: req.body.stock
      };

      const updatedProduct = await Product.findOneAndUpdate(
        { _id: req.body.id },
        product,
        { new: true }
      );

      if (updatedProduct) {
        return res.send({ message: SUCCESS, data: updatedProduct});
      } else {
        return res.send({ message: FAILED });
      }
    } catch (error) {}
  },
  async deleteProduct (req, res) {
    try {
      const deletedProduct = await Product.findByIdAndRemove(req.body.id);

      if (deletedProduct) {
        return res.send({ message: SUCCESS });
      } else {
        return res.send({ message: FAILED });
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  }
}

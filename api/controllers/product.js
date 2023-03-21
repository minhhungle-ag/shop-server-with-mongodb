const { response } = require("../../app");
const Product = require("../../models/product");

const productController = {
  async getAll(req, res) {
    try {
      const db = await Product.find().exec();

      const page = req.query.page || 1;
      const limit = req.query.limit || 15;
      const startIdx = (page - 1) * limit;

      const productList = [...db];
      const totalPage = Math.ceil(productList.length / limit);
      const total = productList.length;

      res.status(200).json({
        message: "get all success",
        status: 200,
        data: {
          data: productList.slice(startIdx, limit),
          pagination: {
            page,
            limit,
            total,
            totalPage,
          },
        },
      });
    } catch (error) {
      console.log(error);

      res.status(400).json({
        message: error.message,
        status: 400,
      });
    }
  },
  async get(req, res) {
    const _id = req.params.productId;

    try {
      const data = await Product.findById({ _id });

      res.status(200).json({
        message: "get one success",
        status: 200,
        data: data,
      });
    } catch (error) {
      console.log(error);

      res.status(400).json({
        message: error.message,
        status: 400,
      });
    }
  },

  add(req, res) {
    try {
      const product = new Product({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,

        firstPicture: req.body.firstPicture,
        secondPicture: req.body.secondPicture,
        thirdPicture: req.body.thirdPicture,
        fourthPicture: req.body.fourthPicture,
        fifthPicture: req.body.fifthPicture,

        createAt: new Date(),
      });

      product.save();

      res.status(200).json({
        message: "add product success",
        status: 200,
        data: product,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: error.message,
        status: 400,
      });
    }
  },
  async edit(req, res) {
    const _id = req.params.productId;
    try {
      await Product.updateOne(
        { _id },
        {
          title: req.body.title,
          price: req.body.price,
          description: req.body.description,

          firstPicture: req.body.firstPicture,
          secondPicture: req.body.secondPicture,
          thirdPicture: req.body.thirdPicture,
          fourthPicture: req.body.fourthPicture,
          fifthPicture: req.body.fifthPicture,

          updatedAt: new Date(),
        }
      );

      res.status(200).json({
        message: `Edit product success`,
        status: 200,
        data: Product,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: error.message,
        status: 400,
      });
    }
  },

  async remove(req, res) {
    const _id = req.params.productId;

    try {
      await Product.deleteOne({ _id });

      res.status(200).json({
        data: {
          status: 200,
          message: "deleted " + _id + " success!",
        },
      });
    } catch (error) {
      res.status(400).json({
        data: {
          status: 400,
          message: error.message,
        },
      });
    }
  },
};

module.exports = productController;

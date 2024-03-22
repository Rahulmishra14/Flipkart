import Product from "../models/product-schema.js";

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).json(products);
  } catch (error) {
    response
      .status(201)
      .json({ message: `An error occurred while fetching products. ${error}` });
  }
};

export const getProductById = async (request, response) => {
  try {
    const id  = request.params.id;
    const product = await Product.findOne({ 'id': id });
    console.log('====================================');
    console.log(product);
    console.log('====================================');
    response.status(200).json(product);
  } catch (error) {
    response
      .status(201)
      .json({ message: `An error occurred while fetching products. ${error}` });
  }
};

const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

router.get('/', asyncHandler(async(req, res) => {

  const products = await Product.find({});
  console.log(products.length);
  if(products.length < 1 ){
    return res.status(500).send({status:500, message: 'Null', type:'Get'});
  }

  res.json(products);

}));

module.exports = router;

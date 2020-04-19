const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Review = require('../models/reviewModel');

router.post('/rating', asyncHandler(async(req, res) => {


  return;
  
  const reviewItem = await Review.find({});

  if(reviewItem.length < 1 ){
    return res.status(500).send({status:500, message: 'Null'});
  }

  reviewItem.ratings.push()

  Rev



}));

router.post('/comment', (req, res) => {

});





module.exports = router;

const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Review = require('../models/reviewModel');

router.get('/', asyncHandler(async(req, res) => {
  let reviewItems;

  try {
    reviewItems = await Review.find({});
  }catch(e) {
    return res.status(500).send({status:500, message: 'Something Happened When Finding'});
  }
  
  if(reviewItems.length < 1 ){
    res.statusMessage = "Nothing Found"
    return res.status(400).end();
  }

    res.send(reviewItems);


}));

router.get('/home', asyncHandler(async(req,res) => {
  let bbItems;

  try {
    bbItems = await Review.find({ home: true })
  }catch(e){
    return res.status(500).send({status:500, message: 'Something Happened When Finding'});
  }

  if(bbItems.length < 1 ){
    res.statusMessage = "Nothing Found"
    return res.status(400).end();
  }

  return res.send(bbItems);
  
}));

router.post('/rating', asyncHandler(async(req, res) => {

  const { rating, id } = req.body;

  if(rating < 1 || rating > 5) return res.status(400).send('rating incorrect');

  if(!id) return res.status(400).send("item has no value");

  //Convert Rating Into An Int
  const parsedRating = parseInt(rating,10);

  if (isNaN(parsedRating)) return res.status(400).send("Rating could not be converted");

  let reviewItem;

  try {
    reviewItem = await Review.findById(id);
  }catch(e){
    return res.status(500).send("something went wrong")
  }

  if(!reviewItem){
    return res.status(500).send("couldn't find the item")
  }

  reviewItem.ratings.push(parsedRating);

  reviewItem.save()
    .then((obj) => res.send('success'))
    .catch((err) => res.status(500).send("something went wrong"))


}));

router.post('/comment', asyncHandler(async(req, res) => {
  const { name, comment, id } = req.body;

  try {
    reviewItem = await Review.findById(id);
  }catch(e){
    return res.status(500).send("something went wrong")
  }

  if(!reviewItem){
    return res.status(500).send("couldn't find the item")
  }

  reviewItem.comments.push({name, comment});

  reviewItem.save()
  .then((obj) => res.send('success'))
  .catch((err) => res.status(500).send("something went wrong"))

}));





module.exports = router;

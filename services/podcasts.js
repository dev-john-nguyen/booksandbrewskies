const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Podcast = require('../models/podcastModel');

router.get('/', asyncHandler(async(req, res) => {

  const podcasts = await Podcast.find({});

  if(podcasts.length < 1 ){
    return res.status(500).send({status:500, message: 'Null', type:'Get'});
  }

  res.json(podcasts);

}));

module.exports = router;

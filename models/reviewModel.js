const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    type: String,
    name: String,
    imageUrl: String,
    description: String,
    myReview: Object,
    ratings: Array,
    comments: Array,
});

module.exports = mongoose.model("Review", reviewSchema);

//myReview Array with an Obj (star rating and written review)
//rating is an array of numbers up to 5 (5 star rating)
//comments wtih multiple objs (name, comment, date/time)
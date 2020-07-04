const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema ({
    type: String,
    home: Boolean,
    name: String,
    imageUrl: String,
    description: String,
    bio: String,
    style: String,
    myReview: {
        rating: Number,
        comment: String
    },
    ratings: [Number],
    comments: [{
        name: String,
        comment: String
    }],
});

module.exports = mongoose.model("Review", reviewSchema);

//myReview Array with an Obj (star rating and written review)
//rating is an array of numbers up to 5 (5 star rating)
//comments wtih multiple objs (name, comment, date/time)
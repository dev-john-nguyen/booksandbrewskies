const router = require('express').Router();
const Review = require('../models/reviewModel');

router.get('/get', (req, res) => {
    Review.find({}).select('-__v -ratings -comments')
        .then((reviews) => {
            res.send(reviews)
        })
        .catch(err => {
            console.log(err)
            res.status(500).end()
        })
})

router.post('/delete', (req, res) => {
    const { _id } = req.body;

    if(!_id) return res.status(400).send('empty id');

    Review.findOneAndDelete({_id})
    .then(item => {
        res.send({
            deleted: true,
            name: item.name
        });
    })
    .catch(err => {
        console.log(err)
        res.status(500).end()
    })

})

router.post('/update', async(req, res) => {
    const {
        imageUrl,
        type,
        name,
        description,
        rating,
        comment,
        bio,
        home,
        style,
        _id
    } = req.body

    Review.findById({ _id })
    .then(async(review) => {
        if(!review) return res.status(404).send('not found')

        if(!review.home && home) {
            try {
                await Review.updateOne({ home: true, type: type }, { home: false }, { runValidators: true });
              } catch (e) {
                console.log('No home true for this type')
              }
        }

        review.type = type
        review.name = name
        review.imageUrl = imageUrl
        review.description = description
        review.bio = bio
        review.home = home
        review.style = style
        review.myReview = {
            rating,
            comment
        }

        review.save(item => {
            res.send({
                updated: true,
                name: name
            });
        })

    })
    .catch(err => {
        console.log(err)
        res.status(500).end()
    })

    // if(home) {
    //     await Review.findById({  _id: _id, home: true, type: type })
    //     .then(async(item)=> {
    //         console.log(item)
    //         if(!item){
    //             try {
    //                 await Review.updateOne({ home: true, type: type }, { home: false }, { runValidators: true });
    //               } catch (e) {
    //                 console.log('No home true for this type')
    //               }
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // Review.findOneAndUpdate({_id}, {
    //     type,
    //     name,
    //     imageUrl,
    //     description,
    //     bio,
    //     home,
    //     style,
    //     myReview: {
    //         rating,
    //         comment
    //     }
    // }, {
    //     returnOriginal: false
    // })
    // .then(item => {
    //     res.send({
    //         updated: true,
    //         name: item.name
    //     });
    // })
    // .catch(err => {
    //     console.log(err)
    //     res.status(500).end()
    // })


})

module.exports = router;
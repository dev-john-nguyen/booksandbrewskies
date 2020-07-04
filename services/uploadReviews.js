const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Review = require('../models/reviewModel');
const multer = require('multer');
const path = require('path');
const sharp = require('sharp');


const storage = multer.memoryStorage();

var upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (res, file, cb) {
    checkFileType(file, cb);
  }
}).single('bbImage')

//Check File Type
function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/;

  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }

}

router.post('/', (req, res) => {

  upload(req, res, async (err) => {
    if (err) {
      return res.send({ msg: err });
    } else {

      //retrieve multer buffer object and resize
      //store into media folder depending on beer or book
      //name image in incremental order

      const { data } = req.body
      const formData = JSON.parse(data);

      //set boolean to false for review items with formData.type that has home as true and set to false

      let updateHome;

      try {
        updateHome = await Review.updateOne({ home: true, type: formData.type }, { home: false }, { runValidators: true });
      } catch (e) {
        console.log(e)
        res.status(500).send("Failed reset home images")
        return;
      }

      //modified should be 1
      console.log(updateHome.nModified + " items set home value to false")

      const { buffer } = req.file



      let imageDir;

      formData.type === 'book' ? imageDir = `media/books/${formData.name}.jpg` : imageDir = `media/beers/${formData.name}.jpg`

      try {
        await sharp(buffer)
          .resize(400, 505)
          .toFormat('jpeg')
          .toFile(imageDir);
      } catch (e) {
        console.log(e)
        res.status(500).send("Failed to store image");
        return;
      }

      const newReview = new Review({
        type: formData.type,
        home: true,
        name: formData.name,
        imageUrl: imageDir,
        description: formData.description,
        bio: formData.bio,
        style: formData.style,
        myReview: {
          rating: formData.rating,
          comment: formData.comment
        }
      });

      newReview.save()
        .then(obj => {
          res.send(obj)
        })
        .catch(err => res.status(500).send("failed to save new BB"));

    }

  })

});

module.exports = router;
const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const Review = require('../models/reviewModel');
const multer = require('multer');
const path = require('path');
const sharp = require('sharp');


const storage = multer.memoryStorage();

var upload = multer({ 
  storage: storage,
  limits: {fileSize: 1000000},
  fileFilter: function(res, file, cb){
    checkFileType(file, cb);
  }
}).single('profileImage')

//Check File Type
function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/;

  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  
  const mimeType = fileTypes.test(file.mimetype);

  if(mimeType && extname) {
    return cb(null, true);
  }else{
    cb('Error: Images Only!');
  }

}

router.post('/', (req, res) => {

  upload(req, res, async(err) => {
    if(err){
      res.send({msg:err})
    } else {
      
      //retrieve multer buffer object and resize
      //store into media folder depending on beer or book
      //name image in incremental order

      const { userId } = req.body
      const { buffer } = req.file
      const imageDir = `media/profile/${userId}.jpg`;
      console.log(__dirname)
      let response;

      try {
        response = await sharp(buffer)
        .resize(400, 505)
        .toFormat('jpeg')
        .toFile(imageDir);
      }catch(e) {
        res.status(500).send("Failed to store image")
      }

        Profile.updateOne({ userId: userId }, { imageUrl: imageDir })
           .then(obj =>{
             //match documents n
             //modified documents nModified
             //upsertedId
             //ok (ran) boolean
             console.log(obj);
             if(obj.n === 0 || !obj.ok){
              res.send([0, "Failed To Update"])
             }else{
               res.send([1, imageDir]);
             }
           })
           .catch(err =>res.send(err))

    }

  })

});

module.exports = router;
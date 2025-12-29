const ImageRouter = require('express').Router();
const Images=require('../model/Imageuploader')

const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
    cb(null,uniqueSuffix+ file.originalname)
  }
})

const upload = multer({ storage: storage })

ImageRouter.post('/',upload.single('image'), async (req, res) => {
  console.log(req.body)
  const imgname = req.file.filename;
  const savedimg = await new Images({
    image:imgname
  })
  await savedimg.save();
    res.status(200).json({
        message:"uploaded.."
    })
})

ImageRouter.get('/getimages/', async (req, res) => {
  const allimages = await Images.find();

  res.status(200).json({
    allimages
  })
})

module.exports = ImageRouter;


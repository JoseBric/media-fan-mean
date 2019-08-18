const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const bcrypt = require('bcryptjs')
const env = require('dotenv').config().parsed
const path = require('path')
const uuid = require('uuid')

const fileFilter = (req, file, cb) => {
  if(file.mimetype != 'image/jpeg' || file.mimetype != 'image/png')
  cb(new Error('Invalid Mime Type, only JPEG and PNG'), false)
  else cb(null, true)
}

const s3 = new aws.S3({
  secretAccessKey: env.AWS_SECRET_ACCESS,
  accessKeyId: env.AWS_ACCESS_KEY_ID,
  region: env.AWS_REGION,
  // credentials: c80da771b8393551690149b0f77410fbb1f7de092fc94de9f9ed7f195458370f,
})
const upload = multer({
  storage: multerS3({
    // fileFilter,
    bucket: 'media-fan',
    acl: 'public-read',
    s3,
    metadata: (req, file, cb) => {
      cb(null, {fieldName: file.fieldname})
    },
    key: (req, file, cb) => {
      const extension = path.extname(file.originalname)
      cb(null, `images/${uuid()}${extension}`)
    }
  })
})
 
module.exports = upload
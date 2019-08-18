const aws = require('aws-sdk')

const params = {
  Bucket: {
    secretAccessKey: env.AWS_SECRET_ACCESS,
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    region: env.AWS_REGION,
  },
  Key: 'images/0058fd17-a0c2-4381-840c-ad15e7d7d182.png',
}

aws.s3({})
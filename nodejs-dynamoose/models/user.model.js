const dynamoose = require('dynamoose');

dynamoose.AWS.config.update({
  accessKeyId: process.env.AWS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

dynamoose.local(process.env.PATH_DYNAMOLOCAL);

const userSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: {
    type: String,
  },
  user:{
    type: String,
  },
  pass:{
    type: String,
  }
},
{
  timestamps: false,
});

module.exports = dynamoose.model('user', userSchema);

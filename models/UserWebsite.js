import mongoose from 'mongoose';

const userWebsiteSchema = new mongoose.Schema({
  user_id: Number,
  platform_name: String,
  url: String
});

export default mongoose.model('UserWebsite', userWebsiteSchema, 'user_website');

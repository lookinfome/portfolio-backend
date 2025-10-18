import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  user_id: Number,
  first_name: String,
  last_name: String,
  preferred_name: String,
  country_code: String,
  phone: String,
  country: String,
  state: String,
  city: String,
  address: String,
  zip: String,
  display_image_url: String,
  about_me: String,
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


export default mongoose.model('UserProfile', userProfileSchema, 'user_profile');

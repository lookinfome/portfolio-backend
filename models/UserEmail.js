import mongoose from 'mongoose';

const userEmailSchema = new mongoose.Schema({
  user_id: Number,
  email: String
});

export default mongoose.model('UserEmail', userEmailSchema, 'user_email');

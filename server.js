import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import UserProfile from './models/UserProfile.js';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// GET endpoint
app.get('/api/user-profile', async (req, res) => {
  try {
    const user = await UserProfile.findOne();
    if (!user) return res.status(404).json({ message: 'No user profile found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// MongoDB connection & server start
const PORT = process.env.PORT || 5001;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: 'portfolio_dev' });
    console.log('MongoDB connected ✅');

    app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
}

startServer();

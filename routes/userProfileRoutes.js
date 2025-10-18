import express from 'express';
import UserProfile from '../models/UserProfile.js';
const router = express.Router();

// Get the first user profile
router.get('/', async (req, res) => {
  try {
    const profile = await UserProfile.findOne(); // use find() for multiple
    console.log('Fetched User Profile:', profile);
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

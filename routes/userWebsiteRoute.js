import express from 'express';
import UserWebsite from '../models/UserWebsite.js';
const router = express.Router();

// Get the first user profile
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const websites = await UserWebsite.find(
      { user_id: userId }
    );
    
    console.log('Fetched User Emails:', websites);
    res.json(websites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

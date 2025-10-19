import express from 'express';
import UserWorkDetails from '../models/UserWorkDetails.js';
const router = express.Router();

// Get the first user profile
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const userWorkDetails = await UserWorkDetails.find(
      { user_id: userId }
    );
    
    console.log('Fetched User Work Details:', userWorkDetails);
    res.json(userWorkDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

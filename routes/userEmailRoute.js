import express from 'express';
import UserEmail from '../models/UserEmail.js';
const router = express.Router();

// Get the first user profile
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const emails = await UserEmail.find(
      { user_id: userId }
    );
    
    console.log('Fetched User Emails:', emails);
    res.json(emails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;

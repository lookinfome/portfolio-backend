import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// Route imports
import userProfileRoute from './routes/userProfileRoutes.js';
import userEmailRoute from './routes/userEmailRoute.js';
import userWebsiteRoute from './routes/userWebsiteRoute.js';
import userWorkDetailsRoute from './routes/userWorkDetails.js';

dotenv.config();

const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Allow cross-origin requests

app.use('/api/user-profile', userProfileRoute); // Delegate to route file
app.use('/api/user-email', userEmailRoute);
app.use('/api/user-website', userWebsiteRoute);
app.use('/api/user-work-details', userWorkDetailsRoute);

const PORT = process.env.PORT || 5001;

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'portfolio_dev',
    });
    console.log('✅ MongoDB connected successfully');

    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1); // Exit on DB failure
  }
}

startServer();

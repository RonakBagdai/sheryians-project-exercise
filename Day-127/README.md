# Day-127: Mood-Based Music Player

This project connects a React frontend with facial expression detection to a Node.js backend for mood-based song recommendations.

## Project Structure

- `backend/` - Node.js/Express server with MongoDB
- `frontend/` - React app with facial expression detection

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd Day-127/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with:

   ```
   MONGO_URI=mongodb://localhost:27017/moody-player
   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
   ```

4. Start the backend server:
   ```bash
   npm start
   ```
   The server will run on http://localhost:3000

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd Day-127/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will run on http://localhost:5173

## How It Works

1. **Facial Expression Detection**: The frontend uses face-api.js to detect facial expressions from the webcam
2. **Mood Detection**: When you click "Detect Mood", it analyzes your facial expression and determines your mood
3. **Song Recommendations**: The detected mood is sent to the backend API to fetch songs that match that mood
4. **Backend API**: The Node.js server provides endpoints for:
   - `GET /songs?mood=<mood>` - Fetch songs by mood
   - `POST /songs` - Upload new songs with mood classification

## API Endpoints

- `GET http://localhost:3000/songs?mood=<mood>` - Get songs by mood
- `POST http://localhost:3000/songs` - Upload a new song (requires audio file, title, artist, mood)

## Features

- Real-time facial expression detection
- Mood-based song recommendations
- File upload support for songs
- MongoDB integration for data persistence
- CORS enabled for frontend-backend communication

## Technologies Used

**Backend:**

- Node.js/Express
- MongoDB/Mongoose
- Multer (file uploads)
- ImageKit (file storage)
- CORS

**Frontend:**

- React
- face-api.js (facial expression detection)
- Vite (build tool)

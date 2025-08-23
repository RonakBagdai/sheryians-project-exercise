import React, { useState } from "react";
import FacialExpressionDetector from "./components/FacialExpressionDetector";
import "./App.css";
import MoodSongs from "./components/MoodSongs";

function App() {
  const [detectedMood, setDetectedMood] = useState(null);

  const handleMoodDetected = (mood) => {
    setDetectedMood(mood);
  };

  return (
    <div className="app-container">
      {/* Decorative background elements */}
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
      <div className="bg-circle bg-circle-3"></div>
      
      {/* App Header */}
      <header className="app-header">
        <h1 className="app-title">Mood Music</h1>
        <p className="app-subtitle">
          Let us detect your mood and recommend the perfect songs to match how you feel
        </p>
      </header>
      
      {/* Main Content */}
      <div className="app-content">
        <FacialExpressionDetector onMoodDetected={handleMoodDetected} />
        <MoodSongs detectedMood={detectedMood} />
      </div>
    </div>
  );
}

export default App;

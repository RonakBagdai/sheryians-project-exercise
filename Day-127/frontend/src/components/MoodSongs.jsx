import React, { useState, useEffect, useRef } from "react";
import "./MoodSongs.css";

const MoodSongs = ({ detectedMood }) => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const audioRef = useRef(null);

  const fetchSongsByMood = async (mood) => {
    if (!mood) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3000/songs?mood=${mood}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSongs(data.songs || []);
    } catch (err) {
      console.error("Error fetching songs:", err);
      setError("Failed to fetch songs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (detectedMood) {
      fetchSongsByMood(detectedMood);
    }
  }, [detectedMood]);

  const handlePlayPause = (song) => {
    if (currentlyPlaying === song._id) {
      // Pause current song
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentlyPlaying(null);
    } else {
      // Play new song
      if (audioRef.current) {
        audioRef.current.pause(); // Stop any currently playing song
      }

      // Handle different audio sources
      let audioUrl = song.audio;

      // If it's a mock URL, use a sample audio for demo
      if (audioUrl.includes("mock-audio-url") || audioUrl === "no-audio-file") {
        // Use a sample audio URL for demo purposes
        audioUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav";
      }

      // Create new audio element
      const audio = new Audio(audioUrl);
      audioRef.current = audio;

      audio
        .play()
        .then(() => {
          setCurrentlyPlaying(song._id);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
          alert("Could not play this song. Please check the audio URL.");
        });
    }
  };

  // Cleanup audio when component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="mood-songs">
      <h2>Recommended Songs</h2>
      <p>
        {detectedMood 
          ? `Music tailored for your ${detectedMood} mood` 
          : "Detect your mood to get personalized song recommendations"}
      </p>

      {loading ? (
        <div className="loading-animation">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      ) : error ? (
        <p className="error">{error}</p>
      ) : songs.length === 0 ? (
        <div className="empty-state">
          {detectedMood ? (
            <p>No songs found for {detectedMood} mood. Try uploading some songs!</p>
          ) : (
            <p>Use the mood detector to find songs that match your current mood</p>
          )}
        </div>
      ) : (
        <div className="songs-container">
          {songs.map((song, index) => (
            <div className="song" key={song._id || index}>
              <div className="title">
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
              <div
                className={`play-pause-button ${
                  currentlyPlaying === song._id ? "playing" : ""
                }`}
                onClick={() => handlePlayPause(song)}
                title={currentlyPlaying === song._id ? "Pause" : "Play"}
              >
                {currentlyPlaying === song._id ? (
                  <i className="ri-pause-fill"></i>
                ) : (
                  <i className="ri-play-fill"></i>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MoodSongs;

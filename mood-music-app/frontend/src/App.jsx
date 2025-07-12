import React, { useEffect, useState, useRef } from "react";
import * as faceapi from "face-api.js";
import axios from "axios";

export default function App() {
  const [mood, setMood] = useState("");
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState("");
  const [noFace, setNoFace] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [detecting, setDetecting] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);
  const intervalRef = useRef(null);
  const lastFetchedMood = useRef("");

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
      await faceapi.nets.faceExpressionNet.loadFromUri("/models");
      setModelsLoaded(true);
    };
    loadModels();

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = document.getElementById("video");
        video.srcObject = stream;
      })
      .catch((err) => console.error("Camera Error:", err));

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const detectMood = async () => {
    setError("");
    setNoFace(false);
    const video = document.getElementById("video");
    try {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections.length > 0) {
        const expressions = detections[0].expressions;
        const moodDetected = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b
        );
        setMood(moodDetected);
        if (lastFetchedMood.current !== moodDetected) {
          fetchSongs(moodDetected);
          lastFetchedMood.current = moodDetected;
        }
      } else {
        setNoFace(true);
        setSongs([]);
        setMood("");
      }
    } catch (err) {
      setError("Error detecting mood.");
    }
  };

  const handleToggleDetect = () => {
    if (!detecting) {
      setDetecting(true);
      detectMood();
      intervalRef.current = setInterval(detectMood, 4000); // Detect every 4 seconds
    } else {
      setDetecting(false);
      clearInterval(intervalRef.current);
    }
  };

  const fetchSongs = async (mood) => {
    const res = await axios.get(`http://localhost:3000/songs/${mood}`);
    setSongs(res.data);
  };

  const handlePlay = (idx) => {
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== idx) audio.pause();
    });
    setPlayingIndex(idx);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* Left: Face Detection */}
        <div className="md:w-1/2 w-full flex flex-col items-center p-8 border-b md:border-b-0 md:border-r border-purple-200">
          <h1 className="text-3xl font-bold mb-4 text-purple-700 text-center">
            Mood Detection{" "}
            <span role="img" aria-label="face">
              😊
            </span>
          </h1>
          <video
            id="video"
            width="320"
            height="240"
            autoPlay
            muted
            className="rounded-lg border-2 border-purple-300 shadow mb-4 -scale-x-100"
          ></video>
          <button
            onClick={handleToggleDetect}
            className={`${
              detecting
                ? "bg-red-600 hover:bg-red-700"
                : "bg-purple-600 hover:bg-purple-700"
            } text-white font-semibold py-2 px-6 rounded-lg shadow mb-4 transition`}
            disabled={!modelsLoaded}
          >
            {modelsLoaded
              ? detecting
                ? "Stop Detect Mood"
                : "Start Detect Mood"
              : "Loading Models..."}
          </button>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">
            Detected Mood:{" "}
            <span className="capitalize text-purple-600">{mood}</span>
          </h2>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          {noFace && (
            <div className="text-yellow-600 mb-2">
              No face detected. Please try again.
            </div>
          )}
        </div>
        {/* Right: Music Player */}
        <div className="md:w-1/2 w-full flex flex-col p-8 bg-purple-50">
          <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">
            Music Player{" "}
            <span role="img" aria-label="music">
              🎶
            </span>
          </h2>
          <div className="w-full space-y-4">
            {songs.length > 0 ? (
              songs.map((song, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-lg p-3 flex flex-col shadow transition ${
                    playingIndex === i ? "ring-2 ring-purple-400" : ""
                  }`}
                >
                  <span className="font-semibold text-purple-700 mb-1">
                    {song.title}
                  </span>
                  <span className="text-gray-600 mb-2 text-sm">
                    {song.artist}
                  </span>
                  <audio
                    ref={(el) => (audioRefs.current[i] = el)}
                    src={song.url}
                    controls
                    className="w-full"
                    onPlay={() => handlePlay(i)}
                    onPause={() => setPlayingIndex(null)}
                  />
                </div>
              ))
            ) : (
              <div className="text-gray-400 text-center">
                No songs to display.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

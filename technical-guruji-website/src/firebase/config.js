import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
// Note: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "technical-guruji-website.firebaseapp.com",
  projectId: "technical-guruji-website",
  storageBucket: "technical-guruji-website.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id-here"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;

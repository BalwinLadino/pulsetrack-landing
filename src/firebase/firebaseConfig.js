// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDRqzkxlpIuJGYCWC0KdF5WDU3LorbxPUk",
  authDomain: "pulsetrack-d7696.firebaseapp.com",
  projectId: "pulsetrack-d7696",
  storageBucket: "pulsetrack-d7696.firebasestorage.app",
  messagingSenderId: "820624630527",
  appId: "1:820624630527:web:5e6417f7e5ed79092d62ca",
  measurementId: "G-NSVWGQ1F0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
const db = getFirestore(app);

// Export
export { db };

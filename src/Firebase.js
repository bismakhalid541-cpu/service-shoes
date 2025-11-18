// src/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // Realtime DB


const firebaseConfig = {
  apiKey: "AIzaSyD0eFsWG2uviJTwI7zYuA7iNj5rCRXPsAs",
  authDomain: "loginsignup-auth-eba4e.firebaseapp.com",
  projectId: "loginsignup-auth-eba4e",
  storageBucket: "loginsignup-auth-eba4e.firebasestorage.app",
  messagingSenderId: "590868021758",
  appId: "1:590868021758:web:e914e2ef787f0bafa3c0af",
  measurementId: "G-8W0WYS1SK0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app); // export database


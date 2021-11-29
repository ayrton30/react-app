// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGS4CdCoMgD2y8PjArd2ZqpUrOo7lzCrw",
  authDomain: "react-coder-455e0.firebaseapp.com",
  projectId: "react-coder-455e0",
  storageBucket: "react-coder-455e0.appspot.com",
  messagingSenderId: "763370053921",
  appId: "1:763370053921:web:eb0e9d8ff645495e6ede60",
  measurementId: "G-9F8N8N5PKL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

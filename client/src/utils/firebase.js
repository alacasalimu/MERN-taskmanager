// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-5cc6f.firebaseapp.com",
  projectId: "taskmanager-5cc6f",
  storageBucket: "taskmanager-5cc6f.appspot.com",
  messagingSenderId: "796273350998",
  appId: "1:796273350998:web:a291863f1473b4c6821ef7",
  measurementId: "G-MJH9K5DBFK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
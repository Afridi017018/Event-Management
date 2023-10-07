// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCftX9FXAyztDof7lrAvG8G7zw6tWJmzwo",
  authDomain: "event-station-bfbcf.firebaseapp.com",
  projectId: "event-station-bfbcf",
  storageBucket: "event-station-bfbcf.appspot.com",
  messagingSenderId: "149889980223",
  appId: "1:149889980223:web:9ce7c53763315cd3b2658a",
  measurementId: "G-LRRBPZ9Q24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
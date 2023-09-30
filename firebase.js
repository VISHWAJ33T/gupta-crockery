// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGKPkUdxApIQSnB3OlBsyA5J7Jq1MISjA",

  authDomain: "gupta-crockery.firebaseapp.com",

  projectId: "gupta-crockery",

  storageBucket: "gupta-crockery.appspot.com",

  messagingSenderId: "97715626005",

  appId: "1:97715626005:web:d21131f58705fc935a6e1c",

  measurementId: "G-WMFFFBWMML",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

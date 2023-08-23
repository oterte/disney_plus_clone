// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTUcq3xs0cdm3fD8-3CTe-azHFjTJp4q8",
  authDomain: "disney-clone-app-25f9e.firebaseapp.com",
  projectId: "disney-clone-app-25f9e",
  storageBucket: "disney-clone-app-25f9e.appspot.com",
  messagingSenderId: "363052069725",
  appId: "1:363052069725:web:83e9c9cd1b997d3b3caeb4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

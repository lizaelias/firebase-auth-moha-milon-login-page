// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfAJqyl3a5xcI4CNQpsV7MBV0GcGKFqXw",
  authDomain: "fir-auth-moha-milon.firebaseapp.com",
  projectId: "fir-auth-moha-milon",
  storageBucket: "fir-auth-moha-milon.appspot.com",
  messagingSenderId: "1076936557248",
  appId: "1:1076936557248:web:446e41f6371ec24c0c2325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0QAG4DU1505hpjuRdikIUF4qpGvodSGo",
  authDomain: "fb-otp-auth.firebaseapp.com",
  projectId: "fb-otp-auth",
  storageBucket: "fb-otp-auth.appspot.com",
  messagingSenderId: "1043063419063",
  appId: "1:1043063419063:web:78e01f03cbef66de255d32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app);
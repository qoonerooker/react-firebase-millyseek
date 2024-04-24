// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQRzjT_xyvXudCKelw5vD2Cv-LJD6UrhE",
  authDomain: "react-firebase-millyseek.firebaseapp.com",
  projectId: "react-firebase-millyseek",
  storageBucket: "react-firebase-millyseek.appspot.com",
  messagingSenderId: "741908456135",
  appId: "1:741908456135:web:149bf2eeb237c7277854e2",
  measurementId: "G-BM7MH5ECGM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

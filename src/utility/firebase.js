import firebase from "firebase/compat/app";
// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo90wNk2LpoJDJADRcEzqfZOQcuCZjZss",
  authDomain: "clone-79cf0.firebaseapp.com",
  projectId: "clone-79cf0",
  storageBucket: "clone-79cf0.appspot.com",
  messagingSenderId: "792456678750",
  appId: "1:792456678750:web:8a563d2741d531ae8ed3cf",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

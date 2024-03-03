import firebase from "firebase/compat/app";
//auth
import {getAuth} from 'firebase/auth'

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJUZG5ZuFLCc6GYc9YTk_eUR3IPgV_7FE",
  authDomain: "clone21-1d8e4.firebaseapp.com",
  projectId: "clone21-1d8e4",
  storageBucket: "clone21-1d8e4.appspot.com",
  messagingSenderId: "892112409311",
  appId: "1:892112409311:web:e9b099ec7f0b0e2941cf6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const db =app.firestore();
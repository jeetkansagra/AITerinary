// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUxuC3nvot2y5c9uz2Ure0YJ-QsZXdD1I",
  authDomain: "jeetkansagra07-e5f45.firebaseapp.com",
  projectId: "jeetkansagra07-e5f45",
  storageBucket: "jeetkansagra07-e5f45.firebasestorage.app",
  messagingSenderId: "845967745575",
  appId: "1:845967745575:web:6c106ac61af754aa922402",
  measurementId: "G-N3YZBFG0FD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)

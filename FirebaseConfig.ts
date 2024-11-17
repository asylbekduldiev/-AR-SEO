import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApZfO80SkUDp_4j17XXztqk5h2Bcm76Vo",
  authDomain: "galax-1d8e1.firebaseapp.com",
  projectId: "galax-1d8e1",
  storageBucket: "galax-1d8e1.firebasestorage.app",
  messagingSenderId: "665213577894",
  appId: "1:665213577894:web:32cb53097ee10a313aa267",
  measurementId: "G-TENY77ZJ77"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP) 
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
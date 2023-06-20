import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyA5jRHhkN9A7zdy06-21c6k6hRHxmOnCEg",
  authDomain: "house-marketplace-app-2fcb8.firebaseapp.com",
  projectId: "house-marketplace-app-2fcb8",
  storageBucket: "house-marketplace-app-2fcb8.appspot.com",
  messagingSenderId: "1060104922165",
  appId: "1:1060104922165:web:475d0792145d010cd77d7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()
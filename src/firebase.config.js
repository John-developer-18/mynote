// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:    "AIzaSyDSjjn2CajdAHtGPrvuhShRUVhBT43Al74",
  authDomain: "my-note-e96c7.firebaseapp.com",
  projectId: "my-note-e96c7",
  storageBucket: "my-note-e96c7.appspot.com",
  messagingSenderId: "785111593395",
  appId: "1:785111593395:web:1cfb9adef00e0c376c5bc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const database = getAuth(app)
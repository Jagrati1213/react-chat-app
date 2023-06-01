import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjiadje2f6t_LcHJgP3Z-UWkDn9SUdWnY",
    authDomain: "chat-reactjs-81a21.firebaseapp.com",
    projectId: "chat-reactjs-81a21",
    storageBucket: "chat-reactjs-81a21.appspot.com",
    messagingSenderId: "52530423484",
    appId: "1:52530423484:web:6fac97e7416896f18392b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);

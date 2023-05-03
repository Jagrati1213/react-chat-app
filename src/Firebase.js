import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzTZbbxy3O90DMCXfjNFHe2xUwEet0Ovk",
    authDomain: "fir-chat-app-bd7fa.firebaseapp.com",
    projectId: "fir-chat-app-bd7fa",
    storageBucket: "fir-chat-app-bd7fa.appspot.com",
    messagingSenderId: "3127443864",
    appId: "1:3127443864:web:5b017c4c562062f460abed"
};

// initialize firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCq66K5IQUB2aIMxeKBvjvLrZTqCOUKH_Q",
    authDomain: "db-auth-451f9.firebaseapp.com",
    projectId: "db-auth-451f9",
    storageBucket: "db-auth-451f9.appspot.com",
    messagingSenderId: "827225129519",
    appId: "1:827225129519:web:6950fa26dee708369f7cda",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
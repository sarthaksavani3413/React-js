// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWqkyZMK-mm68mVEmRdNS5D4HB-_hR54M",
    authDomain: "db-firebase-2cf07.firebaseapp.com",
    projectId: "db-firebase-2cf07",
    storageBucket: "db-firebase-2cf07.firebasestorage.app",
    messagingSenderId: "23103774611",
    appId: "1:23103774611:web:da5cbcccf0e6d5fc0e1266",
    measurementId: "G-J2H1X0FJWJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
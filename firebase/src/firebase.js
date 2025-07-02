// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGlqE53MdLne9Nazxbiu-yvuq_cs6znbY",
    authDomain: "database-85ff8.firebaseapp.com",
    projectId: "database-85ff8",
    storageBucket: "database-85ff8.firebasestorage.app",
    messagingSenderId: "585945296852",
    appId: "1:585945296852:web:46f171b82acb040d2e3041",
    measurementId: "G-T2GTGMFB4R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC8kBNZMqQeuBZjrV8-dnfZxSHGYMsGVzU",
    authDomain: "db-firestore-71a26.firebaseapp.com",
    projectId: "db-firestore-71a26",
    storageBucket: "db-firestore-71a26.firebasestorage.app",
    messagingSenderId: "44225727439",
    appId: "1:44225727439:web:9079a2a160a1a75051a0ba",
    measurementId: "G-6DST8JRLPW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
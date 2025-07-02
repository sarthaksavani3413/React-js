// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY3Ru4Cc-pP_T0uCSsfKhdUzHvZQuLCko",
  authDomain: "firestore-database-ff2b9.firebaseapp.com",
  projectId: "firestore-database-ff2b9",
  storageBucket: "firestore-database-ff2b9.firebasestorage.app",
  messagingSenderId: "228509479710",
  appId: "1:228509479710:web:eef5c4082881fdc0208f0f",
  measurementId: "G-84Y8JGLSYT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4T2gM7TR4FgMPGw2jfkVY4wtlTmXvFrg",
    authDomain: "freebiticketapp.firebaseapp.com",
    projectId: "freebiticketapp",
    storageBucket: "freebiticketapp.appspot.com",
    messagingSenderId: "72874942805",
    appId: "1:72874942805:web:5fd1b265c5852280ad0fdc",
    measurementId: "G-PEWJDYCMP9"
};




// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
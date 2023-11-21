// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3BBb6_lOe7g0-P9AIfbyCjIWprOVGhOM",
    authDomain: "netflixgpt-605cf.firebaseapp.com",
    projectId: "netflixgpt-605cf",
    storageBucket: "netflixgpt-605cf.appspot.com",
    messagingSenderId: "56425768884",
    appId: "1:56425768884:web:e82ff13040681fb2e634e1",
    measurementId: "G-N2TT3H269L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
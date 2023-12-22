// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANsYtEfYEd2b9pIVRSkXaOVOk9fVMahiM",
    authDomain: "netflixapp-17e2d.firebaseapp.com",
    projectId: "netflixapp-17e2d",
    storageBucket: "netflixapp-17e2d.appspot.com",
    messagingSenderId: "419219359658",
    appId: "1:419219359658:web:8e2a4a09cde73526594dd3",
    measurementId: "G-ND3QQ6765Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
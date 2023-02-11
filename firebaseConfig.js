// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6HVWct15DENouAJ4gRxXsPnNNNglAfOA",
    authDomain: "tetotestproject-1.firebaseapp.com",
    projectId: "tetotestproject-1",
    storageBucket: "tetotestproject-1.appspot.com",
    messagingSenderId: "750419513732",
    appId: "1:750419513732:web:9a515855d7133874b14dd1",
    measurementId: "G-F1LX5ZMNDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
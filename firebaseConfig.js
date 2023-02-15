// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {secretApiKey, secretAuthDomain, msgSenderId, appId, measuremId} from "./SecretKeys";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: secretApiKey,
    authDomain: secretAuthDomain,
    projectId: "tetotestproject-1",
    storageBucket: "tetotestproject-1.appspot.com",
    messagingSenderId: msgSenderId,
    appId: appId,
    measurementId: measuremId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};

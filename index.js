//Firebase SDK file initialization
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaOph7PKteIyjSnI2a7ojt6Tdd-yUW64c",
  authDomain: "eusebiubarimb-721bc.firebaseapp.com",
  projectId: "eusebiubarimb-721bc",
  storageBucket: "eusebiubarimb-721bc.appspot.com",
  messagingSenderId: "453661674881",
  appId: "1:453661674881:web:ad7944fc01f24921512c80",
  measurementId: "G-D4056V42H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVpBmVz5bNcqA-eK8BSf4_t-_0OPWJj0k",
  authDomain: "cse134-hw1-e4aaf.firebaseapp.com",
  projectId: "cse134-hw1-e4aaf",
  storageBucket: "cse134-hw1-e4aaf.appspot.com",
  messagingSenderId: "736074298614",
  appId: "1:736074298614:web:f6c02d111463d2d66a28d7",
  measurementId: "G-4LZ8NFCBCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
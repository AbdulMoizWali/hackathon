// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnZnuMijvk1SUdh10Q0H22cBKUUNOGoKQ",
  authDomain: "car-app-hackathon.firebaseapp.com",
  projectId: "car-app-hackathon",
  storageBucket: "car-app-hackathon.appspot.com",
  messagingSenderId: "1006975973852",
  appId: "1:1006975973852:web:5dbf2e58efbd9786b73719",
  measurementId: "G-9FKDZMH5GY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;
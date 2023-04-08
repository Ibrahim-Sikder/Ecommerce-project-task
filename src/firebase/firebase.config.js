// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMihT5DLhxKKyewkEdWZ4l22EV83aUw1I",
  authDomain: "ecommerce-project-b7903.firebaseapp.com",
  projectId: "ecommerce-project-b7903",
  storageBucket: "ecommerce-project-b7903.appspot.com",
  messagingSenderId: "140257725656",
  appId: "1:140257725656:web:a820705cbe02f4f6f69bad",
  measurementId: "G-9BFEEFHNM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
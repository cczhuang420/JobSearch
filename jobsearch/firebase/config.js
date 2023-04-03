// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkCXCzRCql7wNi6BlvcTF0NGNPTXcoP08",
  authDomain: "jobsearch-3cad8.firebaseapp.com",
  projectId: "jobsearch-3cad8",
  storageBucket: "jobsearch-3cad8.appspot.com",
  messagingSenderId: "221383714548",
  appId: "1:221383714548:web:a0a73dcec95ef910ec60a1",
  measurementId: "G-H8VQ1PJZBH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
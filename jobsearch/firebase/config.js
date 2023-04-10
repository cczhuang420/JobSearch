import { initializeApp } from "firebase/app";
// User authentication is under development, will add more functionality if needed in future

const firebaseConfig = {
  apiKey: "",
  authDomain: "jobsearch-3cad8.firebaseapp.com",
  projectId: "jobsearch-3cad8",
  storageBucket: "jobsearch-3cad8.appspot.com",
  messagingSenderId: "221383714548",
  appId: "1:221383714548:web:a0a73dcec95ef910ec60a1",
  measurementId: "G-H8VQ1PJZBH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

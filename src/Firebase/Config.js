// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZm_PG1Z-bt6oWZkQeC3VGyzo-RItJFds",
  authDomain: "techzoneelectronic-f221f.firebaseapp.com",
  projectId: "techzoneelectronic-f221f",
  storageBucket: "techzoneelectronic-f221f.appspot.com",
  messagingSenderId: "862539651474",
  appId: "1:862539651474:web:bb0f8ab53f52e60843c94b",
  measurementId: "G-QELYB7GT54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdvxRYgC4aFAOy4X8Ze-bGvPkwmJ0Gj94",
  authDomain: "auth-project-e445e.firebaseapp.com",
  projectId: "auth-project-e445e",
  storageBucket: "auth-project-e445e.appspot.com",
  messagingSenderId: "905471143420",
  appId: "1:905471143420:web:9f1e7fbb5c4ca08dea9679"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
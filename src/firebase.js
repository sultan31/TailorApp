// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSu1vi7YAd8yGB9oEzguPRN6Zy5lOgJbM",
  authDomain: "tailorapp-d2ca6.firebaseapp.com",
  databaseURL: "https://tailorapp-d2ca6-default-rtdb.firebaseio.com",
  projectId: "tailorapp-d2ca6",
  storageBucket: "tailorapp-d2ca6.appspot.com",
  messagingSenderId: "429606948021",
  appId: "1:429606948021:web:f268c8792e9ac5f11a02fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgf0U3y8A_ess_usjy-UTnoWcUvJ6t_3s",
  authDomain: "nurseryweb-77d95.firebaseapp.com",
  projectId: "nurseryweb-77d95",
  storageBucket: "nurseryweb-77d95.firebasestorage.app",
  messagingSenderId: "213151830841",
  appId: "1:213151830841:web:eccb100a15f44b1c11cee8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, db };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyArrSveth0o8jB4FBg012TnTSSRlCb3yiY",
  authDomain: "mern-aut.firebaseapp.com",
  projectId: "mern-aut",
  storageBucket: "mern-aut.appspot.com",
  messagingSenderId: "918595260268",
  appId: "1:918595260268:web:b2158d0a78f44e0f742d49",
  measurementId: "G-PQE115VE41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
}
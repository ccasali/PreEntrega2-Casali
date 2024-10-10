// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkHTTTqRmeYTZYaLPnKrqoszYnNAVz0RI",
  authDomain: "coderhouse-react-js-ca789.firebaseapp.com",
  projectId: "coderhouse-react-js-ca789",
  storageBucket: "coderhouse-react-js-ca789.appspot.com",
  messagingSenderId: "143440745708",
  appId: "1:143440745708:web:6ebe0e4371ed70aa6f81c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize data base
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKPSdjljiOToT5pKsvkuXJe6uag4G3e2c",
  authDomain: "react-hooks-blog-66708.firebaseapp.com",
  projectId: "react-hooks-blog-66708",
  storageBucket: "react-hooks-blog-66708.appspot.com",
  messagingSenderId: "1073088375385",
  appId: "1:1073088375385:web:aead191d88eabe7ba2df48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
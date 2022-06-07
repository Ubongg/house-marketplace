import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2IJ6J8L5_TQytIauOdMnFfrgGNZCFeR8",
  authDomain: "house-marketplace-app-ca385.firebaseapp.com",
  projectId: "house-marketplace-app-ca385",
  storageBucket: "house-marketplace-app-ca385.appspot.com",
  messagingSenderId: "372468817129",
  appId: "1:372468817129:web:60531357c9f4beb4436478",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

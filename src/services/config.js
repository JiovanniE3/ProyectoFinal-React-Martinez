import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kingsman-8e06f.firebaseapp.com",
  projectId: "kingsman-8e06f",
  storageBucket: "kingsman-8e06f.appspot.com",
  messagingSenderId: "102226283438",
  appId: "1:102226283438:web:be43a44a8fdb6003e4d63f",
  measurementId: "G-35GRGL36SD"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





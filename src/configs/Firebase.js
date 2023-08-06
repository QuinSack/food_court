import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyAJxqO8ArxoIrOVDemK25u8i7MdHkYMWWE",
  authDomain: "food-court-f1727.firebaseapp.com",
  projectId: "food-court-f1727",
  storageBucket: "food-court-f1727.appspot.com",
  messagingSenderId: "259823878938",
  appId: "1:259823878938:web:36ee3c32d4ffc35aece2a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOcni1bvf2ZQGZecms7pKAYLmo0LwqXr8",
  authDomain: "expense-tracker-d6ecf.firebaseapp.com",
  projectId: "expense-tracker-d6ecf",
  storageBucket: "expense-tracker-d6ecf.appspot.com",
  messagingSenderId: "895509195731",
  appId: "1:895509195731:web:faed8d5a58edb27581dd26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACEDAjQ4zLRzj6U0s9mpjJVlLPdNQuuDU",
  authDomain: "materia-argenta-ecommerce.firebaseapp.com",
  projectId: "materia-argenta-ecommerce",
  storageBucket: "materia-argenta-ecommerce.appspot.com",
  messagingSenderId: "447922878482",
  appId: "1:447922878482:web:b5d7db893f22f5c0da80cb",
  measurementId: "G-5MYQCHS75D"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
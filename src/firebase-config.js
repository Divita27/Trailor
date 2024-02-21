import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// changing here
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDoUNURZunkTnXm0KYxRUWKV_44aZfHob4",
    authDomain: "trailor-5f0ff.firebaseapp.com",
    databaseURL: "https://trailor-5f0ff-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "trailor-5f0ff",
    storageBucket: "trailor-5f0ff.appspot.com",
    messagingSenderId: "848499727489",
    appId: "1:848499727489:web:bf129de96cdb2dd7034180",
    measurementId: "G-1RZSHQPFFJ"
  };

const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);

// changing here
export const db = getFirestore(app);
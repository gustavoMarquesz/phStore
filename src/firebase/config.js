
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCapYh74zQoElEQkVGt0xQZQ2_Tp5gffXw",
  authDomain: "phdatabase-9cbe2.firebaseapp.com",
  projectId: "phdatabase-9cbe2",
  storageBucket: "phdatabase-9cbe2.appspot.com",
  messagingSenderId: "696128748601",
  appId: "1:696128748601:web:d908217fcecf721f1761e8"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}
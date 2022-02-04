// Dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Config
import firebaseConfig from "./firebaseConfig.json";

export default getFirestore(initializeApp(firebaseConfig));

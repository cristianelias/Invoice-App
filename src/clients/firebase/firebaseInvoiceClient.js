// Dependencies
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore/lite";

// Config
// import firebaseConfig from "./firebaseConfig.json";

class FirebaseInvoiceClient {
  constructor() {
    const app = initializeApp({
      apiKey: "AIzaSyBJxmaEM79VlzO9I7Tqn5pF73EuG7IzY4s",
      authDomain: "invoice-4pp.firebaseapp.com",
      databaseURL: "https://invoice-4pp-default-rtdb.firebaseio.com",
      projectId: "invoice-4pp",
      storageBucket: "invoice-4pp.appspot.com",
      messagingSenderId: "109703836878",
      appId: "1:109703836878:web:e185b268e1dcd02e49cc9f",
      measurementId: "G-PRR4HTQ58H",
    });
    this.firestore = getFirestore(app);
  }

  getFirestore() {
    return this.firestore;
  }

  async postInvoice(invoice) {
    await addDoc(collection(this.firestore, "invoices"), invoice);
  }
}

export default new FirebaseInvoiceClient();

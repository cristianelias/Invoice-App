// Dependencies
import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";

// Config
import firebaseConfig from "./firebaseConfig.json";

class FirebaseInvoiceClient {
  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(this.app);
  }

  getFirestore() {
    return this.firestore;
  }

  async postInvoice(invoice) {
    await addDoc(collection(this.firestore, "invoices"), invoice);
  }
}

export default new FirebaseInvoiceClient();

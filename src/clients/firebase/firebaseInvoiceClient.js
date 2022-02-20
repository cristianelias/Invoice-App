// Dependencies
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  updateDoc,
  deleteDoc,
  setDoc,
  doc,
} from "firebase/firestore";

// Config
import firebaseConfig from "./firebaseConfig.json";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const INVOICES_COL = "invoices";

class FirebaseInvoiceClient {
  getFirestore() {
    return db;
  }

  async postInvoice({ payload, onSuccess, onError }) {
    try {
      await setDoc(doc(db, INVOICES_COL, payload.id), payload);
      onSuccess();
    } catch (error) {
      onError(error);
    }
  }

  async editInvoice({ payload, onSuccess, onError }) {
    try {
      const invoiceRef = doc(db, INVOICES_COL, payload.id);
      await updateDoc(invoiceRef, payload);
      onSuccess();
    } catch (error) {
      onError(error);
    }
  }

  async deleteInvoice({ id, onSuccess, onError }) {
    try {
      await deleteDoc(doc(db, INVOICES_COL, id));
      onSuccess();
    } catch (error) {
      onError(error);
    }
  }

  async markInvoiceAsPaid({ id, onSuccess, onError }) {
    try {
      const invoiceRef = doc(db, INVOICES_COL, id);
      await updateDoc(invoiceRef, { status: "paid" });
      onSuccess();
    } catch (error) {
      onError(error);
    }
  }
}

export default new FirebaseInvoiceClient();

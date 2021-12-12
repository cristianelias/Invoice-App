import invoicesFromServer from "../mocks/data.json";

const storage = window.localStorage;
const INVOICES = "invoicesFromServer";

class LocalStorageClient {
  constructor() {
    storage.setItem(INVOICES, JSON.stringify(invoicesFromServer));
  }

  createInvoice(invoice) {
    const invoices = this.fetchInvoices();
    storage.setItem(INVOICES, [...invoices, invoice]);
  }

  fetchInvoices() {
    return JSON.parse(storage.getItem(INVOICES));
  }
}

export default new LocalStorageClient();
